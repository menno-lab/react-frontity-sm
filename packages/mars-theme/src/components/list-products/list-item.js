import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Item = ({ name, product_logo, description, price, link, headline }) => {
  
  return (
    <Article>
      <Link link={link}>
        <Title>{name}</Title>
        <Price>€{price}/mo</Price>
        <SubTitleSection>
          <SubTitle>{headline}</SubTitle>
        </SubTitleSection>
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
  border: 3px solid black;
  border-radius: 10px;
  padding: 0 20px;
  text-align: center;
  margin: auto;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #403D39;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
`;


const Price = styled.h3`
  font-size: 1rem;
  color: black;
  padding: 20px;
  font-size: 1.2rem;
`;

const SubTitleSection = styled.div`
  height: 20%;
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
  padding-bottom: 8px;
`;
