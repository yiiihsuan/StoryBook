//StartPage 登入的modal

import React, { useState } from 'react';
import styled from 'styled-components';
import { mockLogin } from '../api';
import { IoClose } from 'react-icons/io5';
import { register } from '../api';
import Swal from 'sweetalert2'; 

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
  z-index:2000;
`;

const ModalContent = styled.div`
position: relative; 
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
  color:black;
  width: 100px;  
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

const CloseButton = styled(IoClose)`
  color:black;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
`;



const LoginModal = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = async () => {
  try {
    const response = await mockLogin(email, password);
    if (response.status === "success") {
      localStorage.setItem('token', response.token); //儲存token到localstorage
      console.log('store token at loginmodal:', response.token);
      onLogin();  
      onClose();  // 關閉modal
    } else {
      //登入失敗狀況
      throw new Error(response.message || "Login failed without specific error.");
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};

//註冊後跳出重新登入提醒
const handleRegister = async () => {
  try {
      const result = await register(email, password);
      if (result.status === 'success') {
          Swal.fire({
              title: '註冊成功',
              text: result.data.message,
              icon: 'success',
              confirmButtonText: '去登入'
          }).then((result) => {
              if (result.isConfirmed) {
                  onClose();  
              }
          });
      }
  } catch (error) {
      Swal.fire({
          title: '註冊失敗',
          text: 'Registration failed: ' + error.message,
          icon: 'error',
          confirmButtonText: 'Ok'
      });
  }
};


  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
      <CloseButton onClick={onClose} />
        <h2>Login</h2>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <ButtonContainer>
         <Button onClick={handleRegister}>Register</Button>
         <Button onClick={handleLogin}>Login</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default LoginModal;


