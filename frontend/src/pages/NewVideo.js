import React from 'react';
import styled from 'styled-components';
import { BiRightArrowCircle } from 'react-icons/bi';
import ProgressContainer from '../component/ProgressContainer';

const FullPage = styled.div`
 height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding: 0 1em;
  overflow-y: auto; 
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
  object-fit: cover; 

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
  background-color: #F2D5CD;
  padding: 3vh;
  text-align: center;
  font-size: 1.5em;
  height: 6vh;
  width: 100%;
  flex-shrink: 0; 
`;

const NewVideo = ({ onNextPage, activeIndex, steps, videoUrl }) => {


  const handleDownloadAndNext = () => {
    // fetch(videoUrl)     //需要用這個 測試＠mac terminal開啟另外瀏覽器: open -na "Google Chrome" --args --disable-web-security --user-data-dir="/tmp/chrome_dev"
    fetch(videoUrl, { mode: 'no-cors' }) //避免cors先用no-cors測試
      .then(response => response.blob())  // 將response 轉換為Blob
      .then(blob => {
        const url = window.URL.createObjectURL(blob);  // 創建一個指向 Blob 的 URL
        const link = document.createElement('a');
        link.href = url;
        link.download = "DownloadedVideo.mp4";  // 指定下載的文件名
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
      <ProgressContainer steps={steps} activeIndex={activeIndex} />
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



