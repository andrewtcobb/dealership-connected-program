import React from "react";

interface Props {
  tableHeader: string;
}

export const VehicleTable = (props: Props) => {
  function renderTable() {
    return <tr>hello world</tr>;
  }

  return (
    <div>
      <table>
        <th>{props.tableHeader}</th>
        {renderTable()}
      </table>
    </div>
  );
};
