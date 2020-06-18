import axios from 'axios';
import DealershipVehicles from '../types/SortedDealershipVehicles';
import {
    getDealership1Vehicles,
    getDealership2Vehicles,
} from './DealershipVehiclesService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getDealership1Vehicles', () => {
    test('should return dealership 1 vehicles when there are vehicles to return', async () => {
        mockedAxios.get.mockImplementation((): any =>
            Promise.resolve(mockSuccessfulDealership1Response),
        );

        const actual = await getDealership1Vehicles();
        const expected: DealershipVehicles = {
            notStarted: ['not started vehicle'],
            inProgress: ['in progress vehicle'],
            completed: ['completed vehicle'],
        };

        expect(actual).toEqual(expected);
    });
    test('should return empty array when an error occurs', () => {});
});

describe('getDealership2Vehicles', () => {
    test('should return dealership 2 vehicles when there vehicles are returned in order', async () => {
        mockedAxios.get.mockImplementation((): any =>
            Promise.resolve(mockOrderedDealership2Response),
        );

        const actual = await getDealership2Vehicles();
        const expected: DealershipVehicles = {
            notStarted: ['not started vehicle'],
            inProgress: ['in progress vehicle'],
            completed: ['completed vehicle'],
        };

        expect(actual).toEqual(expected);
    });

    test('should return dealership 2 vehicles when there vehicles are returned in reversed order', async () => {
        mockedAxios.get.mockImplementation((): any =>
            Promise.resolve(mockReverseOrderedDealership2Response),
        );

        const actual = await getDealership2Vehicles();
        const expected: DealershipVehicles = {
            notStarted: ['not started vehicle'],
            inProgress: ['in progress vehicle'],
            completed: ['completed vehicle'],
        };

        expect(actual).toEqual(expected);
    });

    test('should return dealership 2 vehicles when there vehicles are returned in random order', async () => {
        mockedAxios.get.mockImplementation((): any =>
            Promise.resolve(mockRandomOrderDealership2Response),
        );

        const actual = await getDealership2Vehicles();
        const expected: DealershipVehicles = {
            notStarted: ['not started vehicle'],
            inProgress: ['in progress vehicle'],
            completed: ['completed vehicle'],
        };

        expect(actual).toEqual(expected);
    });
});

const mockSuccessfulDealership1Response = {
    data: [
        {
            vin: 'not started vehicle',
            done: false,
            lineItems: [],
        },
        {
            vin: 'in progress vehicle',
            done: false,
            lineItems: [
                {
                    description: 'description1',
                },
                {
                    description: 'description2',
                },
            ],
        },
        {
            vin: 'completed vehicle',
            done: true,
            lineItems: [],
        },
    ],
};

const mockOrderedDealership2Response = {
    data: [
        {
            vin: 'not started vehicle',
            description: 'Arrive',
        },
        {
            vin: 'in progress vehicle',
            description: 'Arrive',
        },
        {
            vin: 'in progress vehicle',
            description: 'some line item',
        },
        {
            vin: 'completed vehicle',
            description: 'Arrive',
        },
        {
            vin: 'completed vehicle',
            description: 'some line item',
        },
        {
            vin: 'completed vehicle',
            description: 'Complete',
        },
    ],
};

const mockReverseOrderedDealership2Response = {
    data: [
        {
            vin: 'not started vehicle',
            description: 'Arrive',
        },
        {
            vin: 'in progress vehicle',
            description: 'some line item',
        },
        {
            vin: 'in progress vehicle',
            description: 'Arrive',
        },
        {
            vin: 'completed vehicle',
            description: 'Complete',
        },
        {
            vin: 'completed vehicle',
            description: 'some line item',
        },
        {
            vin: 'completed vehicle',
            description: 'Arrive',
        },
    ],
};

const mockRandomOrderDealership2Response = {
    data: [
        {
            vin: 'completed vehicle',
            description: 'some line item',
        },
        {
            vin: 'in progress vehicle',
            description: 'some line item',
        },
        {
            vin: 'not started vehicle',
            description: 'Arrive',
        },
        {
            vin: 'completed vehicle',
            description: 'Arrive',
        },
        {
            vin: 'in progress vehicle',
            description: 'Arrive',
        },
        {
            vin: 'completed vehicle',
            description: 'Complete',
        },
    ],
};
