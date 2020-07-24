import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Fruit = styled.div`
  border: 2px solid black;
  width: 550px;
  height: 500px;
`;
const Fruitimage = styled.img`
  border: 2px solid black;
  width: 150px;
  height: 150px;
`;
const ListingGrid = ({ list }) => {
  let fruitsArray = list.map((item) => {
    return (
      <Link key={item.id} to={`/items/${item.id}`}>
        <Fruitimage src={item.imageSrc} />
        <h3>{item.name}</h3>
        <p>{item.latinName}</p>
      </Link>
    );
  });
  return <Fruit>{fruitsArray}</Fruit>;
};
ListingGrid.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ListingGrid;
