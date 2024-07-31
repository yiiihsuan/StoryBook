import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProgressContainer from '../component/ProgressContainer';
import mockPage from '../mockData/mockPage';
import Book from '../component/Book'; 
import mockVideo from '../mockData/mockVideo'; 
import { BiRightArrowCircle } from 'react-icons/bi';

const FullPage = styled.div`
 height: calc(var(--vh, 1vh) * 100);
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  //font-size: 24px;
  background-color: #E5F2E3;
  scroll-snap-align: start;
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Header = styled.header`
  background-color:#C7E2C1; 
  padding: 0vh; 
  text-align: center;
  color: black;
  z-index:600;
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

//    @media (max-width: 480px) {
//     transform: scale(1.02);
//   }

// `;

// const StepGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   margin: 0 1vw; /* for diff size */
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
//   //font-size: 1.5vw;
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
  justify-content: flex-start;
  position: relative;
  //padding-bottom: 8vh; /* for button*/
`;

const BookContent = styled.div`
  width: 80%;  
  max-height: 60vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden; 
  margin: auto;  //for置中

  @media screen and (max-width: 767px) {
  max-height: 40vh;  
}
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
  background-color: #C7E2C1; 
  padding: 3vh;
  text-align: center;
  font-size: 1.5em;
  height: 6vh;
  width: 100%;
  flex-shrink: 0; 
  z-index:600;
`;

const ParagraphAnalyze = ({ onNextPage,setActiveVideoUrl, activeIndex, steps }) => {


  const handleSubmit = () => {
    setActiveVideoUrl(mockVideo.src);
    console.log('video is',mockVideo.src)
    onNextPage();
  };

  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(mockPage);
  }, []);

  return (
    <FullPage id="page-3">
                <BackgroundImage/>
      <Header>
        <Title>故事分析</Title>
        <Subtitle>Paragraph Analysis</Subtitle>
      </Header>
      <ProgressContainer steps={steps} activeIndex={activeIndex} />
      <MainContent>
      <BookContent>
          <Book pages={pages} />  
        </BookContent>
      </MainContent>
      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>生成有聲書 <BiRightArrowCircle /> </Button>
      </ButtonContainer>
      <Footer />
    </FullPage>
  );
};

export default ParagraphAnalyze;
