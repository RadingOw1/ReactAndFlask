import React, { Suspense } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  width: 7rem;
  height: 2rem;
  border: 1px solid #000000;
  margin: 1rem;
`;


const First = () => {
    return (
        <Section>
            <Container>
                <BlockWrapp>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </BlockWrapp>
            </Container>
        </Section>
    );
};
    
export default First;
    