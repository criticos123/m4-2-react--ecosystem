import React from "react";
import ListingGrid from "./ListingGrid";
import { items } from "../data";
import styled from "styled-components";
const Page = styled.header`
  p {
    font-size: 10px;
  }
`;
const Home = (props) => {
  let list = Object.values(items);

  return (
    <Page>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </p>
      <ListingGrid list={list} />
    </Page>
  );
};

export default Home;
