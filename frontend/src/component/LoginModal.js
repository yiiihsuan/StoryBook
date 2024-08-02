import React, { useState } from 'react';
import styled from 'styled-components';
import { mockLogin } from '../api';
import { useAuth } from '../AuthContext';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:8000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 90%; 
  max-width: 400px; 
  font-size: 16px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  gap:15px;
`;

const Button = styled.button`
  width: 80px;  
  height: 30px; 
  background-color: #FFEA35;
  border-radius: 64px;
  border-top: 1px solid #000;
  border-right: 5px solid #000;
  border-bottom: 5px solid #000;
  border-left: 1px solid #000;
  font-size: 16px;
  cursor: pointer;
  margin-top:2px;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color 0.3s, color 0.3s; 
`;

const LoginModal = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { setIsLoggedIn } = useAuth();

  // const handleLogin = async () => {
  //   try {
  //     const response = await mockLogin(username, password);
  //     console.log('Token received:', response.token);
  //     const userToken = localStorage.setItem('token', response.token); 
  //     console.log('Token saved:', userToken); 
  //     onClose(); 
  //     scrollToPage(0);
  //     console.log('log in modal here to page 0 ')
  //   } catch (error) {
  //     alert(error.message); 
  //   }
  // };

//   const scrollToPage = (index) => {
//     const page = document.getElementById(`page-${index}`);
//     if (page) {
//         page.scrollIntoView({ behavior: 'smooth' });
//     }
// };

// const handleLogin = async () => {
//   const token = await mockLogin(username, password); 
//   onLogin(token);
// };

const handleLogin = async () => {
  try {
    const token = await mockLogin(username, password); // 假設這個函數是你的API調用
    localStorage.setItem('token', token);  // 儲存token到localStorage
    console.log('store localstorage at loginmodal')
    onLogin();  // 觸發一個prop函數來通知父組件登錄成功
    onClose();  // 關閉模態框
  } catch (error) {
    console.error('Login failed:', error);
  }
};


  return (
    <ModalBackdrop>
      <ModalContent>
        <h2>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <ButtonContainer>
         <Button onClick={onClose}>Close</Button>
        <Button onClick={handleLogin}>Login</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default LoginModal;
