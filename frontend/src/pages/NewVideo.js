import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiRightArrowCircle } from 'react-icons/bi';

const FullPage = styled.div`
 height: calc(var(--vh, 1vh) * 100);
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //font-size: 24px;
  background-color: #FCEFEB;

  scroll-snap-align: start;
`;

const Header = styled.header`
  background-color:#F2D5CD;
  padding: 0vh; 
  text-align: center;
  color: black;
`;

const Title = styled.div`
  font-size: 2.4em; 
  margin-bottom: 0.2em;
  font-family: 'Luckiest Guy', "Chocolate Classical Sans", sans-serif, cursive;
`;

const Subtitle = styled.div`
  font-size: 1.5em; 
  font-family: 'Luckiest Guy', "Chocolate Classical Sans", sans-serif, cursive;
`;

const ProgressContainer = styled.div`
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
    transform: scale(1.01);
  }
`;

const StepGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 1vw; 
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
  //font-size: 1.5vw;
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
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 8vh; 
`;

const VideoWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  position: relative;
`;

const VideoPlayer = styled.video`
  margin-top: 0.8%;
  width: 100%;
  //height: 200px;  //auto?
  //height: 450px;
  height:50vh;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover; // 按比例縮放

  @media (min-width: 768px) and (max-width: 1024px) {
      max-height: 60vh; 
    }
  
    @media (max-width: 767px) {
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
  display: flex; 
  justify-content: center; 
  align-items: center; 
  
  svg {
      margin-left: 8px;
      font-size: 20px;
    }

  &:hover {
    background-color: #FFD700;
  }
`;

const Footer = styled.footer`
  background-color: #F2D5CD;
  padding: 3vh;
  text-align: center;
  font-size: 1.5em;
  color: white;
  height: 6vh;
  width: 100%;
  flex-shrink: 0; 
`;

const NewVideo = ({  onNextPage, activeIndex, steps, videoUrl }) => {


  // const handleSubmit = () => {
  //   onNextPage();
  // };

  const handleDownloadAndNext = () => {
    //fetch(videoUrl)  //test ok using @mac: open -na "Google Chrome" --args --disable-web-security --user-data-dir="/tmp/chrome_dev"
    fetch(videoUrl, { mode: 'no-cors' })
    .then(response => response.blob())  // 將response 轉換為Blob
    .then(blob => {
      const url = window.URL.createObjectURL(blob);  // 創建一個指向 Blob 的 URL
      const link = document.createElement('a');
      link.href = url;
      link.download = "DownloadedVideo.mp4";  // 指定下载的文件名
      document.body.appendChild(link);
      link.click();  // 觸發下載
      window.URL.revokeObjectURL(url);  // 清理創建的URL
      document.body.removeChild(link);
      
      onNextPage(); 
    })
    .catch(e => {
      console.error("Download failed", e);
    });
  };

  return (
    <FullPage id="page-4">
      <Header>
        <Title>有聲書影片</Title>
        <Subtitle>Video</Subtitle>
      </Header>
      <ProgressContainer>
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
      </ProgressContainer>
      <MainContent>
      <VideoWrapper>
        <VideoPlayer controls>
          <source src={videoUrl} type="video/mp4" />
          瀏覽器不支援播放。
        </VideoPlayer>
      </VideoWrapper>
      </MainContent>

        <ButtonContainer>
          <Button type="submit" onClick={handleDownloadAndNext}>下載有聲書 <BiRightArrowCircle /> </Button>
        </ButtonContainer>
      <Footer />
    </FullPage>
  );
};

export default NewVideo;



