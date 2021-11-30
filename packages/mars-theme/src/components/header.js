import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logo from './logo.png';


const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <img src={logo} alt="new" height="60px" style={{float: "left", marginRight: "20px"}}/>
          <Title>{state.frontity.title}</Title>
        </StyledLink>
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
  line-height: 60px;
  font-size: 40px;
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