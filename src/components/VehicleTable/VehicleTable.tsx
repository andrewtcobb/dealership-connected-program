import React from 'react';
import '../../css/bootstrap.css';
import '../../css/bootstrap-theme.css';
import './VehicleTable.css';

interface Props {
    tableHeader: string;
    vins: string[];
}

export const VehicleTable = (props: Props) => {
    const renderTable = () => {
        if (props.vins.length) {
            return (
                <>
                    {props.vins.map((vin, index) => (
                        <tr key={index}>
                            <td>{vin}</td>
                        </tr>
                    ))}
                </>
            );
        } else {
            return (
                <tr>
                    <td>None</td>
                </tr>
            );
        }
    };

    function getTableHeaderStyle() {
        switch (props.tableHeader) {
            case 'Not Started':
                return 'warning';
            case 'In Progress':
                return 'info';
            case 'Completed':
                return 'success';
            default:
                return '';
        }
    }

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr className={getTableHeaderStyle()}>
                        <th>{props.tableHeader}</th>
                    </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
            </table>
        </div>
    );
};
