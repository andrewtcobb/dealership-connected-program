import React, { useState, useEffect } from "react";
import { VehicleTable } from "./VehicleTable";
import { getVehicles } from "../../services/DealershipVehiclesService";

export const VehicleTableContainer = () => {
  const [notStartedVins, setnotStartedVins] = useState<string[]>([]);
  const [inProgressVins, setInProgressVins] = useState<string[]>([]);
  const [completedVins, setCompletedVins] = useState<string[]>([]);

  useEffect(() => {
    // const thing = getVehicles();
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div>
      <VehicleTable
        tableHeader="Not Started"
        vins={["test1", "test2"]}
      ></VehicleTable>
      <VehicleTable
        tableHeader="In Progress"
        vins={["test1", "test2"]}
      ></VehicleTable>
      <VehicleTable
        tableHeader="Completed"
        vins={["test1", "test2"]}
      ></VehicleTable>
    </div>
  );
};
