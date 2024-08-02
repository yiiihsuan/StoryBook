import React from 'react';
import styled from 'styled-components';
import ProgressContainer from '../component/ProgressContainer';
import Book from '../component/Book';
import mockVideo from '../mockData/mockVideo';
import { BiRightArrowCircle } from 'react-icons/bi';
// import {fetchVideoData} from '../api';

const FullPage = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
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

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-bottom: 8vh; /* for button*/
`;

const BookContent = styled.div`
  width: 100%;  
  max-height: 60vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden; 
  margin: auto;  //for置中

  @media screen and (max-width: 767px) {
   width: 95%;   
    max-height: 55vh;  
}
   @media (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
    width: 98%;   
    max-height: 65vh;   
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
  transition: background-color 0.3s, color 0.3s; 

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

const ParagraphAnalyze = ({ onNextPage, setActiveVideoUrl, activeIndex, steps, pageData }) => {


  const handleSubmit = async () => {
    try{
    // const data = await fetchVideoData(); // 從 API 獲取數據
    // setActiveVideoUrl(data.src);
    setActiveVideoUrl(mockVideo.src);
    console.log('video is', mockVideo.src)
    onNextPage();
  } catch (error) {
    console.error('Error fetching videoURL data:', error);
  }
  };


  return (
    <FullPage id="page-3">
      <BackgroundImage />
      <Header>
        <Title>故事分析</Title>
        <Subtitle>Paragraph Analysis</Subtitle>
      </Header>
      <ProgressContainer steps={steps} activeIndex={activeIndex} />
      <MainContent>
        <BookContent>
          <Book pages={pageData} />
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
