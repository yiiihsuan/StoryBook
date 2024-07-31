import React, { useState } from 'react';
import styled from 'styled-components';
import mockStory from '../mockData/mockStory.js';
import ProgressContainer from '../component/ProgressContainer';
import { BiRightArrowCircle } from 'react-icons/bi';
//import useViewportHeight from '../hooks/ViewHeight';

const FullPage = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('/readbook.png');
  background-position: top right;
  background-size: 60%;
  background-repeat: no-repeat;
  background-color: #FFE3C5;
  scroll-snap-align: start;


`;

const Header = styled.header`
  background-color: #EDBC87;
  padding: 0vh; 
  text-align: center;
  color: black;
  z-index:100;
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

// const ProgressContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 90%;
//   max-width: 1118px;
//   margin: 2vh auto 1vh; /* 使用 vh 來適應不同螢幕高度 */
//   padding: 1vh; /* 使用 vh 來適應不同螢幕高度 */
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
//   margin: 0 1vw; /* 使用 vw 來適應不同螢幕寬度 */
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
  justify-content: flex-start;
  position: relative;
  padding-bottom: 8vh; 
`;

const TextArea = styled.textarea`
  margin-top: 0.8%;
  width: 80%;
  flex-grow: 1;
  padding: 1em; 
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none; 
  font-size: 16px; 
  background-color: rgba(255, 255, 255, 0.8);
  overflow-y: auto;
  outline: none;
  &:focus {
    border-color: #f0f0f0;
  }
`;

const Footer = styled.footer`
  background-color: #EDBC87;
  padding: 3vh;
  text-align: center;
  font-size: 1.5em; 
  position: relative;
  height: 6vh; /* 使用 vh 來確保Footer高度足夠 */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -4vh; 
  left: 50%;
  transform: translateX(-50%);
  z-index:2000;
`;




const Button = styled.button`
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
    font-size: 20px;
    font-weight: 700;
    min-width: 100px; 
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 12px; 
  }

//   @media(max-width: 1024px) {
  
// }

// @media (max-width: 768px) {
 
// }
`;

// const Button = styled.button`
//   width: 25vh;
//   height: 6vh;
//   display: inline-block;
//   background: #FFEA35;
//   border-radius: 64px;
//   border-top: 1px solid #000;
//   border-right: 5px solid #000;
//   border-bottom: 5px solid #000;
//   border-left: 1px solid #000;
//   font-size: 1.2rem;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 6000;
//   display: flex; 
// justify-content: center; 
// align-items: center; 

// svg {
//     margin-left: 8px;
//     font-size: 20px;
//   }

//   &:hover {
//     background-color: #FFD700;
//   }

// `;


const CreateStory = ({ onNextPage, setActiveStory, activeIndex, steps, isSubmitted, setIsSubmitted }) => {
  const [text, setText] = useState('');
  //const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };


  const handleSubmit = () => {
    setIsSubmitted(true);
    setActiveStory(mockStory);
    onNextPage();
  };

  return (
    <FullPage id="page-0">
      <Header>
        <Title>你的故事</Title>
        <Subtitle>Your Story</Subtitle>
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
        <TextArea
          placeholder={`開始：開頭應該設定場景，介紹主要人物引起聽眾的好奇心。\n衝突：一個好故事需要有衝突或挑戰，推動故事向前發展。\n高潮：這是故事的轉折點，主角面對挑戰，作出重要的決定。\n解決方案：敘述衝突如何解決，這會導致故事的結局。\n結尾：總結故事，展示人物如何成長或教訓何在。`}
          value={text}
          onChange={handleChange}
        />
        <ButtonContainer>
        <Button type="submit" onClick={handleSubmit} disabled={isSubmitted}>生成新故事 <BiRightArrowCircle /> </Button>
        </ButtonContainer>
      </MainContent>
      <Footer />
    </FullPage>
  );
};

export default CreateStory;








