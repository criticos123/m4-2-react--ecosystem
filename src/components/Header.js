import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Page = styled.header`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: row;
  }
  a {
    color: blue;
    text-decoration: none;
    margin-right: 10px;
    list-style: none;
    font-family: "Lato", sans-serif;
  }
  .navLink {
    color: maroon;
    border-bottom: 3px solid maroon;
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
        <NavLink activeClassName="navLink" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="navLink" to="/about">
          <li>about</li>
        </NavLink>
      </ul>
    </Page>
  );
};

export default Header;
