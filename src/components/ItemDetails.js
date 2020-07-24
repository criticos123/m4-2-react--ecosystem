import { useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { items } from "../data";
import { sellers } from "../data";
const Imagestyles = styled.img`
  width: 50%;
  margin-right: 100px;
  border-radius: 8px;
`;
const Avatarstyles = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
const Firstdiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  max-height: 300px;
`;
const Seconddiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Button = styled.button`
  border-radius: 8px;
  padding: 10px;

  background-color: #4b0082;
  color: #fff;
`;
const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = sellers[item.sellerId];
  const buttonText =
    item.quantity > 0 ? (
      <Button>{`${item.price}$ - Buy Now`}</Button>
    ) : (
      "Out of stock"
    );

  return (
    <Firstdiv>
      <Imagestyles src={item.imageSrc} />
      <Seconddiv>
        <h3>{item.name}</h3>
        <p>{item.latinName}</p>
        <p>{item.description}</p>
        <p>{item.countryOfOrigin}</p>
        <span>{buttonText}</span>
        <p>
          <Avatarstyles src={seller.avatarSrc} /> sold by: {seller.storeName}
        </p>
      </Seconddiv>
    </Firstdiv>
  );
};

export default ItemDetails;
