import React from 'react';
import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 90%;
//   max-width: 1118px;
//   margin: 2vh auto 1vh;
//   padding: 1vh;
//   border-radius: 10px;
//   z-index: 100;

//   @media (max-width: 768px) {
//     transform: scale(0.75);
//   }

//   @media (max-width: 480px) {
//     transform: scale(1.02);
//   }
// `;

// const StepGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   margin: 0 1vw;

//   @media (max-width: 768px) {
//     margin: 0 0.5vw; 
//   }

//   @media (max-width: 480px) {
//     margin: 0 0.01vw; 
//   }
// `;

// const Number = styled.div`
//   height: 36px;
//   width: 36px;
//   position: relative;

//     @media (max-width: 768px) {
//     height: 24px;
//     width: 24px;
//   }

//   @media (max-width: 480px) {
//     height: 18px;
//     width: 18px;
//   }
// `;

// const OverlapGroup = styled.div`
//   border-radius: 18px;
//   height: 36px;
//   width: 36px;
//   position: relative;

//     @media (max-width: 768px) {
//     height: 24px;
//     width: 24px;
//   }

//   @media (max-width: 480px) {
//     height: 18px;
//     width: 18px;
//   }
// `;

// const Ellipse = styled.div`
//   background-color: ${props => props.completed ? 'rgba(36, 34, 34, 1)' : '#bbb'};
//   border-radius: 18px;
//   height: 36px;
//   width: 36px;
//   position: absolute;
//   top: 0;
//   left: 0;
//     @media (max-width: 768px) {
//     height: 24px;
//     width: 24px;
//   }

//   @media (max-width: 480px) {
//     height: 18px;
//     width: 18px;
//   }
// `;

// const TextWrapper = styled.div`
//   color: #ffffff;
//   font-family: "OPPOSans-Bold", Helvetica;
//   font-size: 18px;
//   font-weight: 700;
//   left: 14px;
//   letter-spacing: 0;
//   line-height: normal;
//   position: absolute;
//   text-align: center;
//   top: 6px;
//     @media (max-width: 768px) {
//     font-size: 12px;
//     top: 3px;
//     left: 6px;
//   }

//   @media (max-width: 480px) {
//     font-size: 8px;
//     top: 1px;
//     left: 4px;
//   }
// `;

// const StepText = styled.div`
//   color: var(--variable-collection-text, #242222);
//   font-family: "Noto Sans-SemiCondensed", Helvetica;
//   font-size: 18px;
//   font-weight: 400;
//   letter-spacing: 0;
//   line-height: normal;
//   text-align: center;
//   width: fit-content;
//   margin-top: 1vh;
//     @media (max-width: 768px) {
//     font-size: 14px;
//   }

//   @media (max-width: 480px) {
//     font-size: 10px;
//   }
// `;

// const ProgressLineContainer = styled.div`
//   flex-grow: 1;
//   display: flex;
//   align-items: center;
// `;

// const ProgressLine = styled.div`
//   width: 100%;
//   height: 1px;
//   background: ${props => props.completed ? 'rgba(36, 34, 34, 1)' : '#bbb'};
//   opacity: ${props => props.completed ? '1' : '0.8'};
//   position: relative;
//   top: -18px;

//   @media (max-width: 768px) {
//     width: 100%; 
//   }

//   @media (max-width: 480px) {
//     width: 100%; 
//   }
// `;


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
`;

const StepGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  margin: 0 1vw;  // for smaller size

  @media (max-width: 768px) {
    margin: 0 0.5vw;
  }
  @media (max-width: 480px) {
    margin: 0 0.25vw;
  }
`;

const Number = styled.div`
  height: 36px;
  width: 36px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;  // center
  @media (max-width: 768px) {
    height: 24px;
    width: 24px;
  }
  @media (max-width: 480px) {
    height: 18px;
    width: 18px;
  }
`;

const OverlapGroup = styled.div`
  border-radius: 50%;  //circle
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Ellipse = styled.div`
  background-color: ${props => props.completed ? 'rgba(36, 34, 34, 1)' : '#bbb'};
  border-radius: 50%;  //circle
  height: 100%;
  width: 100%;
  position: absolute;
`;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: "OPPOSans-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  // text in center
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 8px;
  }
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ProgressLineContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
   position: relative; 
`;

const ProgressLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.completed ? 'rgba(36, 34, 34, 1)' : '#bbb'};
  opacity: ${props => props.completed ? '1' : '0.8'};
  position: absolute;
  top: -18px; 
    @media (max-width: 768px) {
    top: -12px; // Adjust for the height of the number in smaller devices
  }
  @media (max-width: 480px) {
    top: -9px; // Adjust for the height of the number in even smaller devices
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
