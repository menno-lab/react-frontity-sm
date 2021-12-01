import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "./list";

const Product = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  
  // Get the data of the post.
  const product = state.source[data.type][data.id];
  const name = product.acf.name;
  const headline = product.acf.headline;
  const description = product.acf.description;
  const price = product.acf.price;
  const product_logo = product.acf.product_logo;
  
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
        <h1>{name}</h1>
        <h2>{headline}</h2>
        <h2>€{price}/mo</h2>
        <ButtonSection>
         <Button>Subscribe Now</Button>
        </ButtonSection>
        <DescriptionSection>
         <span>{description}</span>
        </DescriptionSection>
        <Img src={product_logo} alt="prod_logo"/>  
    </Container>
  ) : null;
};

export default connect(Product);

const Container = styled.div`
  margin: 0;
  width: 80%;
  height: 100%;
  text-align: center;
  padding-bottom: 50px;
`;

const ButtonSection = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const Button = styled.button`
  background-color: #08D9D6;
  padding: 12px 50px;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
  cursor: pointer;
`;

const DescriptionSection = styled.div`
  width: 100%;
  text-align: justify;
  padding: 10px;
`;

const Img = styled.img`
  width: 60vw;
`;
