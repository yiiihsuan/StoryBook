import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mockPage from '../mockData/mockPage';
import Book from '../component/Book'; 
import mockVideo from '../mockData/mockVideo'; 


const FullPage = styled.div`
 height: calc(var(--vh, 1vh) * 100);
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  //font-size: 24px;
  background-color: #C7E2C1;
  scroll-snap-align: start;
`;

const Header = styled.header`
  background-color:#7FC4B1;
  padding: 0vh; /* 使用 vh 來適應不同螢幕高度 */
  text-align: center;
  color: black;
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

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1118px;
  margin: 2vh auto 1vh; /* 使用 vh 來適應不同螢幕高度 */
  padding: 1vh; /* 使用 vh 來適應不同螢幕高度 */
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
  margin: 0 1vw; /* 使用 vw 來適應不同螢幕寬度 */
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
  margin-top: 1vh; /* 使用 vh 來適應不同螢幕高度 */
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
  justify-content: flex-start;
  position: relative;
  padding-bottom: 8vh; /* 使用 vh 來留出空間放置按鈕，防止覆蓋 */
`;

const BookContent = styled.div`
  width: 80%;  // 根据页面布局调整宽度
  max-height: 40vh;  // 设置最大高度，确保不会超出视图高度
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;  // 隐藏超出部分
  margin: auto;  // 自动边距，使其居中显示
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
  background-color: #7FC4B1;
  padding: 3vh;
  text-align: center;
  font-size: 1.5em;
  color: white;
  height: 6vh;
  width: 100%;
  flex-shrink: 0; /* 防止 Footer 收缩 */
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
      <Header>
        <Title>故事分析</Title>
        <Subtitle>Paragraph Analysis</Subtitle>
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
      <BookContent>
          <Book pages={pages} />  
        </BookContent>
      </MainContent>
      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>生成有聲書</Button>
      </ButtonContainer>
      <Footer />
    </FullPage>
  );
};

export default ParagraphAnalyze;
