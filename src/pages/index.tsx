import * as React from 'react';
import { VehicleTableContainer } from '../components/VehicleTable/VehicleTableContainer';
import '../css/index.css';
import '../css/bootstrap.css';
import '../css/bootstrap-theme.css';
import Helmet from 'react-helmet';

const IndexPage = () => {
    return (
        <div>
            <Helmet defer={false}>
                <title>Dealership Connected Program</title>
                <meta
                    name="description"
                    content="FordLabs engineering project #1: Dealership Connected Program"
                />
                <meta name="viewport" content="width=device-width" />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="https://storage.labs.ford.com/drew-engineering-challenge-1/dcp.png"
                />
                <html lang="en" />
            </Helmet>
            <body>
                <h1 className="header">Dealerships Connected Program (DCP)</h1>
                <VehicleTableContainer></VehicleTableContainer>
            </body>
        </div>
    );
};

export default IndexPage;
