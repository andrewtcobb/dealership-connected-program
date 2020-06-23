import * as React from 'react';
import { VehicleTableContainer } from '../components/VehicleTable/VehicleTableContainer';
import '../css/index.css';

const IndexPage = () => {
    return (
        <div>
            <h1>Dealerships Connected Program (DCP)</h1>
            <VehicleTableContainer></VehicleTableContainer>
        </div>
    );
};

export default IndexPage;
