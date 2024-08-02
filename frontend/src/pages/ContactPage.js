import React, { useState } from 'react';
import styled from 'styled-components';
import { postContactForm } from '../api';
import Swal from 'sweetalert2';

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

  @media (max-width: 768px) {
    font-size: 26px;
  }
    
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 30px;  
  }
  `;

const Subtitle = styled.div`
  font-size: 1.5em; 
  font-family: 'Luckiest Guy', "Chocolate Classical Sans", sans-serif, cursive;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;  
  }
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
  padding: 10px;
  width: 90%; 
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1; 
`;

const FormTitle = styled.h3`
  font-size: 1rem; 
  color: #333;
  margin-bottom: 10px; 
`;

const FormSubtitle = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 20px; 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px; 
  margin-bottom: 10px; 
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem; 
`;

const TextArea = styled.textarea`
  padding: 10px; 
  margin-bottom: 10px; 
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem; 
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  color:black;
  width: 150px;  
  height: 50px; 
  display: inline-block;
  background: #FFEA35;
  border-radius: 64px;
  border-top: 1px solid #000;
  border-right: 5px solid #000;
  border-bottom: 5px solid #000;
  border-left: 1px solid #000;
  font-size: 1rem; 
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  appearance: none;

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
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const FooterText = styled.p`
  font-size: 12px;
  color: #555;
`;

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 阻止表單默認行為
    try {
      const response = await postContactForm(formData);
      if (response.status === 'success') {
        Swal.fire({
          title: 'Success!',
          text: response.message,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: '提交失敗，稍後再試。',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: '網路錯誤，稍後再試',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
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
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
            <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <TextArea name="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange}></TextArea>
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