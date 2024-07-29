import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1118px;
  margin: 2vh auto 1vh;
  padding: 1vh;
  border-radius: 10px;
  z-index: 100;

  @media (max-width: 768px) {
    transform: scale(0.75);
  }

  @media (max-width: 480px) {
    transform: scale(1.03);
  }
`;

const StepGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 1vw;

  @media (max-width: 768px) {
    margin: 0 0.5vw; /* Reduce margin on smaller screens */
  }

  @media (max-width: 480px) {
    margin: 0 0.01vw; /* Further reduce margin on very small screens */
  }
`;

const Number = styled.div`
  height: 36px;
  width: 36px;
  position: relative;
`;

const OverlapGroup = styled.div`
  border-radius: 18px;
  height: 36px;
  width: 36px;
  position: relative;
`;

const Ellipse = styled.div`
  background-color: ${props => props.completed ? 'rgba(36, 34, 34, 1)' : '#bbb'};
  border-radius: 18px;
  height: 36px;
  width: 36px;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: "OPPOSans-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  left: 14px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 6px;
`;

const StepText = styled.div`
  color: var(--variable-collection-text, #242222);
  font-family: "Noto Sans-SemiCondensed", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: fit-content;
  margin-top: 1vh;
`;

const ProgressLineContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const ProgressLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.completed ? 'rgba(36, 34, 34, 1)' : '#bbb'};
  opacity: ${props => props.completed ? '1' : '0.8'};
  position: relative;
  top: -18px;

  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Adjust width for very small screens */
  }
`;

const ProgressContainer = ({ steps, activeIndex }) => (
  <Container>
    {steps.map((step, index) => (
      <React.Fragment key={step}>
        <StepGroup>
          <Number>
            <OverlapGroup>
              <Ellipse completed={index <= activeIndex} />
              <TextWrapper>{index + 1}</TextWrapper>
            </OverlapGroup>
          </Number>
          <StepText>{step}</StepText>
        </StepGroup>
        {index < steps.length - 1 && (
          <ProgressLineContainer>
            <ProgressLine completed={index < activeIndex} />
          </ProgressLineContainer>
        )}
      </React.Fragment>
    ))}
  </Container>
);

export default ProgressContainer;
