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
  padding: 0vh; /* 使用 vh 來適應不同螢幕高度 */
  text-align: center;
  color: black;
  flex-shrink: 0;
`;

const Title = styled.div`
  font-size: 2.4em; /* 使用 em 來適應不同字體大小 */
  margin-bottom: 0.2em;
  font-family: 'Luckiest Guy', "Chocolate Classical Sans", sans-serif, cursive;
`;

const Subtitle = styled.div`
  font-size: 1.5em; /* 使用 em 來適應不同字體大小 */
  font-family: 'Luckiest Guy', "Chocolate Classical Sans", sans-serif, cursive;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  //padding-bottom: 8vh; 
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
  width: 25vh;
  height: 6vh;
  background: #FFEA35;
  border-radius: 64px;
  border-top: 1px solid #000;
  border-right: 5px solid #000;
  border-bottom: 5px solid #000;
  border-left: 1px solid #000;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6000;

  &:hover {
    background-color: #FFD700;
  }
`;

const Footer = styled.footer`
  background-color: #EEE4B1;
  padding: 3vh;
  text-align: center;
  font-size: 1.5em;
  color: white;
  height: 6vh;
  width: 100%;
  flex-shrink: 0; 
`;

const SwiperContainer = styled(Swiper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CharacterAnalyze = ({ onNextPage, activeIndex, steps }) => {


  const handleSubmit = () => {
    onNextPage();
  };





  return (
    <FullPage id="page-2">
      <Header>
        <Title>角色分析</Title>
        <Subtitle>Character Analysis</Subtitle>
      </Header>
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
        {mockCharacters.map((character, index) => (
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
          <Button type="submit" onClick={handleSubmit}>段落分析</Button>
        </ButtonContainer>
      <Footer />
    </FullPage>
  );
};

export default CharacterAnalyze;


