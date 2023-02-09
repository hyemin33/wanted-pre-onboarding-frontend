import React from "react";
import styled from "@emotion/styled";

const ServiceWrapper = ({ children }) => {
  return (
    <Wrapper>
      <WrapperContainer>
        <Header>
          <h2>Pre Onboarding Frontend</h2>
        </Header>
        <Body>{children}</Body>
        <Footer>
          <p>Copyright ⓒ hm. All Rights Reserved.</p>
        </Footer>
      </WrapperContainer>
    </Wrapper>
  );
};

const Footer = styled.div`
  border-top: 1px solid #ddd;
  height: 35px;
  display: flex;
  flex: center;
  align-items: center;
  margin-top: auto;

  & > p {
    width: 100%;
    text-align: center;
  }
`;
const Header = styled.div`
  border-bottom: 1px solid #ddd;
  height: 100px;
  display: flex;
  flex: center;
  align-items: center;

  & > h2 {
    width: 100%;
    text-align: center;
    color: #8f47e6;
  }
`;

const Body = styled.div`
  margin: auto;
  width: 700px;

  margin: 40px auto;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  background: #fff;
`;

const WrapperContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #ebe4f9;
`;
export default ServiceWrapper;
