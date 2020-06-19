import * as React from 'react';
import { Link } from 'gatsby';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { withLayout, LayoutProps } from '../components/Layout';
import { VehicleTableContainer } from '../components/VehicleTable/VehicleTableContainer';
import './index.css';
import { useState } from 'react';

const IndexPage = (props: LayoutProps) => {
    return (
        <div>
            <h1>Dealerships Connected Program (DCP)</h1>
            <VehicleTableContainer></VehicleTableContainer>
        </div>
    );
};

export default withLayout(IndexPage);
