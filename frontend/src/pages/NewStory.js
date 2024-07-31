import React from 'react';
import styled from 'styled-components';
import ProgressContainer from '../component/ProgressContainer';
import { BiRightArrowCircle } from 'react-icons/bi';
import mockCharacters from '../mockData/mockCharacter';


const FullPage = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-image: url('/book-back.png');
  background-position: bottom right;
  background-size: 50%;
  background-repeat: no-repeat;
  background-color: #E1FEF6;
  scroll-snap-align: start;
  position: relative;
`;

const Header = styled.header`
  background-color: #7FC4B1;
  padding: 0;
  text-align: center;
  color: black;
  flex-shrink: 0; /* 防止 Header 收缩 */
`;

const Title = styled.div`
  font-size: 42px; 
  margin-bottom: 0.2em;
  font-family: 'Luckiest Guy', "Chocolate Classical Sans", sans-serif, cursive;

  @media (max-width: 768px) {
    font-size: 26px;
  }
    
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 30px;  
  }

`;

const Subtitle = styled.div`
  font-size: 24px; 
  font-family: 'Luckiest Guy', "Chocolate Classical Sans", sans-serif, cursive;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;  
  }
`;

// const ProgressContainer = styled.div`
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
//     transform: scale(1.01);
//   }
// `;

// const StepGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   margin: 0 1vw;
// `;

// const Number = styled.div`
//   height: 36px;
//   width: 36px;
//   position: relative;
// `;

// const OverlapGroup = styled.div`
//   border-radius: 18px;
//   height: 36px;
//   width: 36px;
//   position: relative;
// `;

// const Ellipse = styled.div`
//   background-color: ${props => props.completed ? 'rgba(36, 34, 34, 1)' : '#bbb'};
//   border-radius: 18px;
//   height: 36px;
//   width: 36px;
//   position: absolute;
//   top: 0;
//   left: 0;
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
// `;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center; /* 垂直居中内容 */
  justify-content: flex-start;
  padding: 0 1em; /* 根据需要调整内容的左右内边距 */
  overflow-y: auto; /* 允许垂直滚动 */
  position: relative;
`;

const StoryContent = styled.div`
  margin-top: 0.8%;
  width: 80%; 
  //max-height: 50vh; 
  padding: 2vh;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow-y: auto;
  font-family: Arial, sans-serif;
  font-size: 1em;
  color: #333;
  text-align: left;
  line-height: 1.6;
  opacity:0.95;

  // @media (min-width: 768px) and (max-width: 1024px) {
  //   max-height: 60vh; 
  // }

  // @media (max-width: 767px) {
  //   max-height: 40vh; 
  // }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1em; 
  position: relative;
  top:20px;
  z-index: 2000;
`;

const Button = styled.button`
 position: relative;
  margin-top:2px;
  color:black;
   background: #FFEA35;
    border-radius: 64px;
  border-top: 1px solid #000;
  border-right: 5px solid #000;
  border-bottom: 5px solid #000;
  border-left: 1px solid #000;  
  padding: 10px 23px;
  font-size: 20px;
  font-weight: 500;
  min-width: 80px;  
  min-height: 36px; 
  text-align: center;
    display: flex; 
  justify-content: center; 
align-items: center; 
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color 0.3s, color 0.3s; // 過度效果

  &:hover, &:active {
    color: #black;
    background-color: #D8FF4A;
  }
    svg {
    margin-left: 8px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 12px; 
  }
`;

const Footer = styled.footer`
  background-color: #7FC4B1;
  padding: 3vh;
  text-align: center;
  font-size: 1.5em;
  height: 6vh;
  width: 100%;
  flex-shrink: 0; /* 防止 Footer 收缩 */
`;

const NewStory = ({ onNextPage, story, activeIndex, steps , setCharacterData}) => {
  const handleSubmit = () => {
    setCharacterData(mockCharacters);//use mock data
    onNextPage();
  };

  return (
    <FullPage id="page-1">
      <Header>
        <Title>全新故事</Title>
        <Subtitle>New Story</Subtitle>
      </Header>
       <ProgressContainer steps={steps} activeIndex={activeIndex} />
      <MainContent>
        <StoryContent>{story ? story.content : 'Loading...'}</StoryContent>
      </MainContent>
      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>分析角色 <BiRightArrowCircle /> </Button>
      </ButtonContainer>
      <Footer />
    </FullPage>
  );
};

export default NewStory;


      {/* <ProgressContainer>
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
      </ProgressContainer> */}