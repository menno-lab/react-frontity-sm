import React from "react";
import { styled } from "frontity";
import iphone from './iphone.png';
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Home() {
    return (
    <Body> 
       <Row>
          <TitleSection>
            <h1 style={{fontSize: "3.5rem"}}>Meet new and interesting dogs nearby</h1>
            <Button><FaApple /> Download</Button>
            <Button><FaGooglePlay /> Download</Button>    
          </TitleSection>
          <ImgSection>
            <Img src={iphone} alt="ihpone"/>
          </ImgSection>
        </Row> 
    </Body>
    )
}

export default Home

const Body = styled.div`
  min-height: 75vh;
`;

const Row = styled.div`
  width: 80vw;
  max-width: 2000px;
  padding-top: 50px;
  
`;

const TitleSection = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: text-top;
  padding-top: 10vh;
  @media screen and (max-width: 900px) {
    padding-top: 0;
    width: 100%;
    text-align: center;
  }
`;

const ImgSection = styled.div`
  width: 50%;
  display: inline-block;
  text-align: center;
  vertical-align: text-top;
  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    padding-top: 50px;
  }
`;

const Img = styled.img`
  height: 75vh;
  margin-bottom: 40px;
`;

const Button = styled.button`
 padding: 8px 30px;
 margin: 10px;
 color: white;
 background-color: black;
 border: none;
 font-size: 1.2rem;
`;