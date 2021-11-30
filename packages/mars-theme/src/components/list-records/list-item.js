import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ name, product_logo, description, price, link }) => {
  
  return (
    <article>
      <Link link={link}>
        <Title>{name}</Title>
        <SubTitle>{description}</SubTitle>
        <img src={product_logo} alt="prod_logo" height="50px"/>
        <Description>{description}</Description>
        <Price>€{price}/mo</Price>
      </Link>
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 2rem;
  color: #403D39;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #EB5E28;
  margin: 0;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Description = styled.p`
  font-size: 1rem;
  color: black;
  margin: 0;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Price = styled.p`
  font-size: 1rem;
  color: black;
  margin: 0;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
