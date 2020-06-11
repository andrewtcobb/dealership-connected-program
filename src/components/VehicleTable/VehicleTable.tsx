import React from "react";

interface Props {
  tableHeader: string;
  vins: string[];
}

export const VehicleTable = (props: Props) => {
  const renderTable = () => (
    <>
      {props.vins.map((vin, index) => (
        <tr key={index}>
          <td>{vin}</td>
        </tr>
      ))}
    </>
  );

  return (
    <div>
      <table>
        <th>{props.tableHeader}</th>
        {renderTable()}
      </table>
    </div>
  );
};
