import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import ProgressContainer from '../component/ProgressContainer';
import { BiRightArrowCircle } from 'react-icons/bi';


const FullPage = styled.div`
height: calc(var(--vh, 1vh) * 100);
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //font-size: 24px;
  background-color: #E1FEF6;
  scroll-snap-align: start;
`;

const Header = styled.header`
  background-color:#7FC4B1;
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
  padding-bottom: 8vh; /* 使用 vh 來留出空間放置按鈕，防止覆蓋 */
`;
const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const DownloadVideo = ({ onNextPage, activeIndex, steps,videoUrl }) => {
  const handleSubmit = () => {
    if (window.confirm('目前的故事會刪除喔～')) {
      onNextPage();
    }
  };

  return (
    <FullPage id="page-5">
           <Header>
        <Title>影片保存</Title>
        <Subtitle>Video Download</Subtitle>
      </Header>
      <ProgressContainer steps={steps} activeIndex={activeIndex} />
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
      <MainContent>
        <QRCodeContainer>
            {/* <h1>Scan QR code</h1> */}
          <QRCode value={videoUrl} size={256} level={"H"} includeMargin={true} />
        </QRCodeContainer>
        </MainContent>
        <ButtonContainer>
          <Button type="submit" onClick={handleSubmit}>生成新故事 <BiRightArrowCircle /> </Button>
        </ButtonContainer>
      <Footer />
    </FullPage>
  );
};

export default DownloadVideo;

