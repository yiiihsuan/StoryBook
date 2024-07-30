import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFBEA;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  background-color: #FFFFA5;
  text-align: center;
  padding: 3px 0;
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  flex-grow: 1; 
`;

const FormContainer = styled.div`
  padding: 10px; /* 调整填充 */
  width: 90%; /* 调整宽度 */
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1; 
`;

const FormTitle = styled.h3`
  font-size: 1rem; /* 调整字体大小 */
  color: #333;
  margin-bottom: 10px; /* 调整底部间距 */
`;

const FormSubtitle = styled.p`
  font-size: 0.9rem; /* 调整字体大小 */
  color: #777;
  margin-bottom: 20px; /* 调整底部间距 */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px; /* 调整填充 */
  margin-bottom: 10px; /* 调整底部间距 */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem; /* 调整字体大小 */
`;

const TextArea = styled.textarea`
  padding: 10px; /* 调整填充 */
  margin-bottom: 10px; /* 调整底部间距 */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem; /* 调整字体大小 */
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 150px;  /* 调整宽度 */
  height: 50px; /* 调整高度 */
  display: inline-block;
  background: #FFEA35;
  border-radius: 64px;
  border-top: 1px solid #000;
  border-right: 5px solid #000;
  border-bottom: 5px solid #000;
  border-left: 1px solid #000;
  font-size: 1rem; /* 调整字体大小 */
  cursor: pointer;
  margin-top: 10px; /* 调整顶部间距 */
  transition: background-color 0.3s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #FFD700;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  background-color: #FFFFA5;
  text-align: center;
  padding: 10px 0;
  height: 6vh;
  display: flex; /* 使用 flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ContactPage = () => {
  return (
    <PageContainer>
      <Header>
        <Title>聯絡我們</Title>
        <Subtitle>Let's get in touch!</Subtitle>
      </Header>
      <ContentContainer>
        <FormContainer>
          <FormTitle>想要獲取更多精彩內容？我們隨時歡迎您的聯繫！</FormTitle>
          <FormSubtitle>
            Excited to discover more amazing content? We're always here to chat and answer any questions you have!
          </FormSubtitle>
          <Form>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="tel" placeholder="Phone Number" />
            <TextArea rows="5" placeholder="Message"></TextArea>
            <ButtonContainer>
              <Button type="submit">Submit</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </ContentContainer>
      <FooterContainer>
        <FooterText>Copyright © 2024 - Chunghwa Telecom Co., Ltd</FooterText>
      </FooterContainer>
    </PageContainer>
  );
};

export default ContactPage;