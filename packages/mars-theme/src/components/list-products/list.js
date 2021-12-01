import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];

        const name = item.acf.name
        const product_logo = item.acf.product_logo
        const description = item.acf.description
        const price = item.acf.price
        const link = item.link
        const headline = item.acf.headline
        
        return <Item 
          key={item.id}
          name={name}
          product_logo={product_logo}
          description={description}
          price={price}
          link={link}
          headline={headline}
        />;
      })}
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: center;
    padding: 50px 20px;
  }
  @media screen and (max-width: 900px) {
    padding: 50px 0;
  }
`;