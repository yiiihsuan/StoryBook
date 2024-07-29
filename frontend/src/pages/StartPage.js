import React, {useState} from 'react';
import styled from 'styled-components';
import { FaPenNib, FaUser, FaBookOpen, FaFileAudio,FaDownload } from 'react-icons/fa';
import LoginModal from '../component/LoginModal';


const PageContainer = styled.div`
height: calc(var(--vh, 1vh) * 100);
  background-color: #FFFBEA;
  display: flex;
  //justify-content: center;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0;
`;

const BackgroundImage = styled.div`
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BottomRightImage = styled.img`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 35%;
  height: auto;
  z-index: 2;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  padding: 1%;
  border-radius: 10px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left; 
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left:10%;
`;

const Title = styled.h1`
  font-size: 400%;
  margin: 0;
  color: black;
  margin-right: 10px; 
`;

const Subtitle = styled.h2`
  font-size: 80px;
  margin: 0;
  color: #6a1b9a;
`;

const Description = styled.p`
  padding-left:10%;
  font-size: 300%;
  color: black;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #ccff99;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 2%;
  margin-left:50%;
`;


// const SvgContainer = styled.div`
//   padding-left: 15%;
//   margin-top: 20px;
//   width: 100%;
// `;

// const ResponsiveSvg = styled.svg`
//   width: 50%; 
//   height: auto; 

const SvgContainer = styled.div`
  padding-left: 15%;
  margin-top: 2%;
  width: 80%; 
  z-index: 2;
  position: relative;
  //height:auto;
`;



const ResponsiveSvg = styled.svg`
  padding-left:2%;
  width: 100%; 
  height: auto; 
  //transform: scaleX(1.1);
`;

const CircleContainer = styled.foreignObject`
  width: 153px;
  height: 153px;
  overflow: visible;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 80%;
  height: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ bgColor }) => bgColor};
  border: 5px solid black;
  z-index: 4;
`;


const CircleText = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;




const StartPage = ({ onLogin }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };



  return (
    <PageContainer>
      <BackgroundImage />
      <ContentContainer>
      <TitleContainer>
          <Title>請你跟我訴說你的</Title>
          <Subtitle>故事</Subtitle>
        </TitleContainer>
        <Description>Please tell us your story</Description>
        <SvgContainer>
        <ResponsiveSvg xmlns="http://www.w3.org/2000/svg" width="700" height="400" viewBox="0 0 600 300" fill="none" style={{ overflow: 'visible' }}>
            <path d="M0.681433 77.7543C20.8051 40.1078 76.0522 -25.547 136.051 13.0057C211.05 61.1965 204.367 206.119 289.46 229.149C357.534 247.573 417.255 211.583 500.607 191.286" stroke="#7A7A7A" stroke-dasharray="12 12"/>
            <CircleContainer x="-60" y="80">
              <Circle bgColor="#E1FEF6">
                <CircleText>
                  <FaPenNib style={{ fontSize: '32px', marginBottom: '10px' }} />
                  創造故事
                </CircleText>
              </Circle>
            </CircleContainer>
            <CircleContainer x="120" y="0"> 
              <Circle bgColor="#FBE3EB">
                <CircleText>
                  <FaUser style={{ fontSize: '32px', marginBottom: '10px' }} />
                  角色介紹
                </CircleText>
              </Circle>
            </CircleContainer>
            <CircleContainer x="245" y="160"> 
      <Circle bgColor="#FFFCA0" style={{ stroke: '#000', strokeWidth: '5px' }}>
        <CircleText>
          <FaBookOpen style={{ fontSize: '32px', marginBottom: '10px' }} />
          段落分析
        </CircleText>
      </Circle>
    </CircleContainer>

    <CircleContainer x="420" y="100"> 
      <Circle bgColor="#FBE3EB">
        <CircleText>
          <FaDownload style={{ fontSize: '32px', marginBottom: '10px' }} />
          有聲書下載
        </CircleText>
      </Circle>
    </CircleContainer>

          </ResponsiveSvg>
        </SvgContainer>
        <Button onClick={handleOpenModal}>Start</Button>
      </ContentContainer>
      <BottomRightImage src="/test.png" alt="Illustration" />
      {isModalVisible && <LoginModal onClose={handleCloseModal} onLogin={onLogin} />}
    </PageContainer>
  );
};

export default StartPage;