import SortedDealershipVehicles from '../types/SortedDealershipVehicles';
import * as Dealership2 from '../types/Dealership2Types';
import axios from 'axios';
import { Dealership1Vehicle } from '../types/Dealership1Types';
import { Status } from '../types/Status';

async function getVehicles(): Promise<SortedDealershipVehicles> {
    const dealership1Vehicles: SortedDealershipVehicles = await getDealership1Vehicles();
    const dealership2Vehicles: SortedDealershipVehicles = await getDealership2Vehicles();

    const dealershipVehicles: SortedDealershipVehicles = {
        notStarted: [
            ...dealership1Vehicles.notStarted,
            ...dealership2Vehicles.notStarted,
        ],
        inProgress: [
            ...dealership1Vehicles.inProgress,
            ...dealership2Vehicles.inProgress,
        ],
        completed: [
            ...dealership1Vehicles.completed,
            ...dealership2Vehicles.completed,
        ],
    };

    return dealershipVehicles;
}

async function getDealership1Vehicles(): Promise<SortedDealershipVehicles> {
    try {
        const response = await axios.get(
            'https://dealership1.apps.pd01e.edc1.cf.ford.com/api/vehicle',
        );

        const dealership1Vehicles: Dealership1Vehicle[] = response.data;

        let sortedDealership1Vehicles: SortedDealershipVehicles = sortDealership1Vehicles(
            dealership1Vehicles,
        );

        return sortedDealership1Vehicles;
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

async function getDealership2Vehicles(): Promise<SortedDealershipVehicles> {
    try {
        const response = await axios.get(
            'https://dealership2.apps.pd01e.edc1.cf.ford.com/api/line-item',
        );

        const dealership2Vehicles: Dealership2.LineItem[] = response.data;

        let sortedDealership2Vehicles: SortedDealershipVehicles = sortDealership2Vehicles(
            dealership2Vehicles,
        );

        return sortedDealership2Vehicles;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

function sortDealership1Vehicles(
    vehicles: Dealership1Vehicle[],
): SortedDealershipVehicles {
    let sortedDealership1Vehicles: SortedDealershipVehicles = {
        notStarted: [],
        inProgress: [],
        completed: [],
    };
    vehicles.forEach((dealership1Vehicle: Dealership1Vehicle) => {
        if (dealership1Vehicle.done) {
            sortedDealership1Vehicles.completed.push(dealership1Vehicle.vin);
        } else if (dealership1Vehicle.lineItems.length > 0) {
            sortedDealership1Vehicles.inProgress.push(dealership1Vehicle.vin);
        } else {
            sortedDealership1Vehicles.notStarted.push(dealership1Vehicle.vin);
        }
    });
    return sortedDealership1Vehicles;
}

function sortDealership2Vehicles(
    lineItems: Dealership2.LineItem[],
): SortedDealershipVehicles {
    let sortedDealership2Vehicles: SortedDealershipVehicles = {
        notStarted: [],
        inProgress: [],
        completed: [],
    };

    let vins: Map<string, Status> = new Map();

    lineItems.forEach((lineItem: Dealership2.LineItem) => {
        if (lineItem.description === 'Complete') {
            vins.set(lineItem.vin, 'complete');
            return;
        }
        if (!vins.has(lineItem.vin)) {
            vins.set(lineItem.vin, 'not started');
            return;
        }
        if (vins.get(lineItem.vin) !== 'complete') {
            vins.set(lineItem.vin, 'in progress');
            return;
        }
    });

    vins.forEach((status: Status, vin: string) => {
        switch (status) {
            case 'not started':
                sortedDealership2Vehicles.notStarted.push(vin);
                break;
            case 'in progress':
                sortedDealership2Vehicles.inProgress.push(vin);
                break;
            case 'complete':
                sortedDealership2Vehicles.completed.push(vin);
                break;
        }
    });

    return sortedDealership2Vehicles;
}

export { getVehicles, getDealership1Vehicles, getDealership2Vehicles };
