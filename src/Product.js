import React from "react";
import styled from "styled-components";

const Block = styled.div`
  width: 250px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s, transform 0.2s ease;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Image = styled.img`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  letter-spacing: 0.3px;
`;

const Price = styled.h3`
  font-weight: 800;
  margin: 0;
  color: #ff7272;
  letter-spacing: 0.6px;
`;

const Button = styled.button`
  background-color: #f75f5f;
  color: #fff;
  width: 100%;
  padding: 18px;
  border: 0;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s;
  text-transform: uppercase;
  &:hover {
    background-color: #ff7070;
  }
`;

const BlockInfo = styled.div`padding: 20px;`;

const Product = ({ title, price, image }) => (
  <Block>
    <Image src={image} />
    <BlockInfo>
      <Title>{title}</Title>
      <Price>${price}</Price>
    </BlockInfo>
    <Button>Add to cart</Button>
  </Block>
);

export default Product;
