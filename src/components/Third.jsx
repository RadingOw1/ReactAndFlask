import React from "react";
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
  color: #000;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Third = () => {
  return (
    <Section>
      <Container>
        <div id="card">
          <div className="card">
            <img className="card-image" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
            <div className="card-title">
              <h2>Headphone</h2>
            </div>
            <div className="card-detail">
              <h3>
                in | <span className="date">Clever</span>
              </h3>
            </div>
            <div className="card-text">
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                temporibus omnis illum maxime quod deserunt eligendi dolor
              </p>
            </div>
            <div className="card-product-price">
              <p>
                $<span>3500</span>
              </p>
              <button type="button">Buy Now</button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Third;
