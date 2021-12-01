import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Item = ({ name, product_logo, description, price, link, headline }) => {
  
  return (
    <Article>
      <Link link={link}>
        <Title>{name}</Title>
        <Price>€{price}/mo</Price>
        <SubTitle>{headline}</SubTitle>
        <Button>Learn More</Button> 
        <ImgSection>
         <Img src={product_logo} alt="prod_logo"/>
        </ImgSection>
      </Link>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
  background: white;
  display: flex;
  justify-content: center;
  width: 75%; 
  height: 70vh;
  max-height: 600px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 0 20px;
  text-align: center;
  margin: auto;
  @media screen and (max-width: 900px) {
    margin-bottom: 20px;
    padding-bottom: 40px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #403D39;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
`;

const Price = styled.h3`
  font-size: 1.3rem;
  color: black;
  padding: 20px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  margin-bottom: 20px;
  padding: 8px 30px;
  color: white;
  background-color: black;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const ImgSection = styled.div`
  width: 100%;
`;

const Img = styled.img`
  border: 3px solid #FF2E63;
  border-radius: 15px;
  width: 60%;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  color: #FF2E63;
  margin: 0;
  padding-bottom: 15px;
`;
