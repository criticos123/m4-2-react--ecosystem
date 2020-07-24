import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Page = styled.header`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: row;
  }
  a {
    text-decoration: none;
    list-style: none;
    font-family: "Lato", sans-serif;
  }
  li {
    margin: 10px;
  }

  h1 {
    color: black;
    font-family: "Lato", sans-serif;
  }
`;
const Header = (props) => {
  return (
    <Page>
      <h1>Fruit Emporium</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>about</li>
        </Link>
      </ul>
    </Page>
  );
};

export default Header;
