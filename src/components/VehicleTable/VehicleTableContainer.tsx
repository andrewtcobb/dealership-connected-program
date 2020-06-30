import React, { useState, useEffect } from 'react';
import { VehicleTable } from './VehicleTable';
import { getVehicles } from '../../services/DealershipVehiclesService';
import SortedDealershipVehicles from '../../types/SortedDealershipVehicles';
import './VehicleTableContainer.css';

export const VehicleTableContainer = () => {
    const [notStartedVins, setNotStartedVins] = useState<string[]>([
        'Loading...',
    ]);
    const [inProgressVins, setInProgressVins] = useState<string[]>([
        'Loading...',
    ]);
    const [completedVins, setCompletedVins] = useState<string[]>([
        'Loading...',
    ]);
    const [refresh, setRefresh] = useState<{}>();

    useEffect(() => {
        (async function initState() {
            const vehicles: SortedDealershipVehicles = await getVehicles();

            setNotStartedVins(vehicles.notStarted);
            setInProgressVins(vehicles.inProgress);
            setCompletedVins(vehicles.completed);
        })();
    }, [refresh]);

    return (
        <>
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
            <button
                className="btn-default refresh-button"
                onClick={() => setRefresh({})}
            >
                Refresh
            </button>
        </>
    );
};
