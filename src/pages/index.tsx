import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";
import { VehicleTable } from "../components/VehicleTable/VehicleTable";
import { VehicleTableContainer } from "../components/VehicleTable/VehicleTableContainer";

const IndexPage = (props: LayoutProps) => (
  <div>
    <h1>Dealerships Connected Program (DCP)</h1>
    <VehicleTableContainer></VehicleTableContainer>
  </div>
);

export default withLayout(IndexPage);
