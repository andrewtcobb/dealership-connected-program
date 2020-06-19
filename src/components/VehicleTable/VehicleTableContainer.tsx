import React, { useState, useEffect } from 'react';
import { VehicleTable } from './VehicleTable';
import { getVehicles } from '../../services/DealershipVehiclesService';
import SortedDealershipVehicles from '../../types/SortedDealershipVehicles';
import './VehicleTableContainer.css';

export const VehicleTableContainer = () => {
    const [notStartedVins, setNotStartedVins] = useState<string[]>([]);
    const [inProgressVins, setInProgressVins] = useState<string[]>([]);
    const [completedVins, setCompletedVins] = useState<string[]>([]);

    useEffect(() => {
        (async function initState() {
            const vehicles: SortedDealershipVehicles = await getVehicles();

            setNotStartedVins(vehicles.notStarted);
            setInProgressVins(vehicles.inProgress);
            setCompletedVins(vehicles.completed);
        })();
    }, []);

    return (
        <div className="vehicle-tables">
            <VehicleTable
                tableHeader="Not Started"
                vins={notStartedVins}
            ></VehicleTable>
            <VehicleTable
                tableHeader="In Progress"
                vins={inProgressVins}
            ></VehicleTable>
            <VehicleTable
                tableHeader="Completed"
                vins={completedVins}
            ></VehicleTable>
        </div>
    );
};
