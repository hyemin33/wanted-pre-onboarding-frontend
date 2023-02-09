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
  max-width: 700px;
  min-height: calc(100vh - 101px - 36px);
`;

const WrapperContainer = styled.div`
  overflow-y: auto;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #ebe4f9;
`;
export default ServiceWrapper;
