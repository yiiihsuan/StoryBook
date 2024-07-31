import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import {  EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import CharacterCard from  '../component/CharacterCard'; 
import mockCharacters from '../mockData/mockCharacter';
import ProgressContainer from '../component/ProgressContainer';
import { BiRightArrowCircle } from 'react-icons/bi';
import mockPage from '../mockData/mockPage';

const FullPage = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: #FEFBEC;
  scroll-snap-align: start;
  position: relative;
`;

const Header = styled.header`
  background-color:#EEE4B1;
  padding: 0vh; 
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
  justify-content: center;
  position: relative;
  //padding-bottom: 8vh; 
  @media (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
    max-height:60vh;  
  }
`;


const CardContent = styled.div`
  margin-top: 0.8%;
  max-height: 40vh;
  //padding: 2vh;
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  background-color: #EEE4B1;
  padding: 3vh;
  text-align: center;
  font-size: 1.5em;
  height: 6vh;
  width: 100%;
  flex-shrink: 0; 
`;

const SwiperContainer = styled(Swiper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CharacterAnalyze = ({ onNextPage, activeIndex, steps, setPageData ,characterData}) => {


  const handleSubmit = async () => {
    // const data = await fetchParagraphData(); // 從 API 獲取數據
    // setPageData(data); // 更新 Home 中的狀態
    setPageData(mockPage);
    onNextPage(); // 導航到下一頁
  };





  return (
    <FullPage id="page-2">
      <Header>
        <Title>角色分析</Title>
        <Subtitle>Character Analysis</Subtitle>
      </Header>
      <ProgressContainer steps={steps} activeIndex={activeIndex} />
      <MainContent>
        {/* <CardContent> */}
        <SwiperContainer
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{ width: '78%', height: '90%' }}
          >
        {characterData.map((character, index) => (
          <SwiperSlide key={index}>
            <CharacterCard
              name={character.name}
              description={character.description}
              imageSrc={character.image}
              audioSrc={character.audio}
            />
          </SwiperSlide>
        ))}
          </SwiperContainer>
      {/* </CardContent> */}
      </MainContent>
        <ButtonContainer>
          <Button type="submit" onClick={handleSubmit}>段落分析 <BiRightArrowCircle /> </Button>
        </ButtonContainer>
      <Footer />
    </FullPage>
  );
};

export default CharacterAnalyze;


