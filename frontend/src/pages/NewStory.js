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
  flex-shrink: 0; 
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
  //justify-content: center; 
  justify-content: flex-start;
  padding: 0 1em;
  overflow-y: auto; 
  position: relative;
`;

const StoryContent = styled.div`
  margin-top: 0.8%;
  width: 80%; 
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
  background-color: #7FC4B1;
  padding: 3vh;
  text-align: center;
  font-size: 1.5em;
  height: 6vh;
  width: 100%;
  flex-shrink: 0; 
`;

const NewStory = ({ onNextPage, story, activeIndex, steps, setCharacterData }) => {
  
const handleSubmit = async () => {
    try{
    // const data = await fetchCharacterData(); // 從 API 獲取數據
    // setCharacterData(data); 
    await setCharacterData(mockCharacters);//use mock data
    onNextPage();
  } catch (error) {
    console.error('Error fetching character data:', error);
  }
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


