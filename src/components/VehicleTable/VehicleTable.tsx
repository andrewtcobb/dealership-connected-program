import React from 'react';

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

    return (
        <div>
            <table>
                <th>{props.tableHeader}</th>
                {renderTable()}
            </table>
        </div>
    );
};
