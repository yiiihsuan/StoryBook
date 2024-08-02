import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPenNib, FaUser, FaBookOpen, FaDownload } from 'react-icons/fa';
import LoginModal from '../component/LoginModal';
import { BiRightArrowCircle } from 'react-icons/bi';
import { FaSignOutAlt } from 'react-icons/fa';


const PageContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background-color: #FFFBEA;
  display: flex;
  background-image: url('/startback.png');
  background-position: bottom right;
  background-size: 45%;
  background-repeat: no-repeat;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0;

  @media (max-width: 768px) { /* For mobile devices */
  background-position: top right;
}
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
  font-size: 64px;
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
  font-size: 36px;
  color: black;
  margin: 10px 0;
`;

const Button = styled.button`
  color:black;
  width: 180px;  
  height: 50px; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-color: #FFEA35;
  border-radius: 64px;
  border-top: 1px solid #000;
  border-right: 5px solid #000;
  border-bottom: 5px solid #000;
  border-left: 1px solid #000;
  font-size: 20px; 
  cursor: pointer;
  margin-top: 2%;
  margin-left:30%;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color 0.3s, color 0.3s; //過渡效果

  svg {
    margin-left: 8px;
    font-size: 20px;
  }
`;


const SvgContainer = styled.div`
  padding-left: 15%;
  margin-top: 2%;
  width: 80%; 
  z-index: 2;
  position: relative;
`;


const ResponsiveSvg = styled.svg`
  padding-left:2%;
  width: 100%; 
  height: auto; 
  @media (max-width: 768px) { /* For mobile devices */
  width: 200%;
}
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
  width: 120px;
  height:120px;
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




const StartPage = ({ onLogin, onLogout }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };



  return (
    <PageContainer>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 10000 }}>
        <button onClick={onLogout} style={{ border: 'none', background: 'none' }}>
          <FaSignOutAlt size={24} />
        </button>
      </div>
      <ContentContainer>
        <TitleContainer>
          <Title>請你跟我訴說你的</Title>
          <Subtitle>故事</Subtitle>
        </TitleContainer>
        <Description>Please tell us your story</Description>
        <SvgContainer>
          <ResponsiveSvg xmlns="http://www.w3.org/2000/svg" width="700" height="400" viewBox="0 0 600 300" fill="none" style={{ overflow: 'visible' }}>
            <path d="M0.681433 77.7543C20.8051 40.1078 76.0522 -25.547 136.051 13.0057C211.05 61.1965 204.367 206.119 289.46 229.149C357.534 247.573 417.255 211.583 500.607 191.286" stroke="#7A7A7A" stroke-dasharray="12 12" />
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
              <Circle bgColor="#FFE3C5">
                <CircleText>
                  <FaDownload style={{ fontSize: '32px', marginBottom: '10px' }} />
                  有聲書下載
                </CircleText>
              </Circle>
            </CircleContainer>

          </ResponsiveSvg>
        </SvgContainer>
        <Button onClick={handleOpenModal}>Start    <BiRightArrowCircle /> </Button>
      </ContentContainer>
      {isModalVisible && <LoginModal onLogin={onLogin} onClose={handleCloseModal} />}
    </PageContainer>
  );
};

export default StartPage;