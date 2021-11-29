import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
        <img src="https://toppng.com/uploads/preview/dog-paw-print-png-dog-paw-11563597387zsw1pcwdge.png" alt="new" height="50px"/>
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 14px;
  color: #fff;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;


// const Container = styled.div`
//   width: 848px;
//   max-width: 100%;
//   box-sizing: border-box;
//   padding: 24px;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;