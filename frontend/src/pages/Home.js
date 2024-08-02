import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import StartPage from './StartPage';
import CreateStory from './CreateStory';
import NewStory from './NewStory';
import ContactPage from './ContactPage';
import CharacterAnalyze from './CharacterAnalyze';
import ParagraphAnalyze from './ParagraphAnalyze';
import NewVideo from './NewVideo';
import DownloadVideo from './DownloadVideo';
// import { fetchParagraphData } from './api'; 
import useViewportHeight from '../hooks/ViewHeight';
import Swal from 'sweetalert2'; 

const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100); 
  overflow-y: scroll;
`;

const steps = ['我的故事', '全新故事', '角色分析', '段落分析', '有聲書'];


const Home = () => {

  useViewportHeight();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [story, setStory] = useState(null);//生成故事的資料
  const [characterData, setCharacterData] = useState([]);//角色分析的資料
  const [pageData, setPageData] = useState(null);//段落分析的資料
  const [videoUrl, setVideoUrl] = useState(null); //影片連結的資料


  //在Home調用handle log in
  // const handleLogin = async (username, password) => {
  //   try {
  //     const response = await mockLogin(username, password);
  //     localStorage.setItem('token', response.token);
  //     setIsLoggedIn(true);
  //     console.log('Login successful, token saved.');
  //     scrollToPage(0);
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //   }
  // };


  // const handleLogin = (token) => {
  //   setIsLoggedIn(true);  // 更新登錄狀態
  //   setActiveIndex(0);  // 更新activeIndex來顯示CreateStory
  //   scrollToPage(0);  // 滾動到CreateStory組件
  // };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setTimeout(()=>{
      scrollToPage(0);
    },100);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   console.log('Token read:', token);
  //   if (token) {
  //     setIsLoggedIn(true);
  //     console.log('set log in :', isLoggedIn);
  //     scrollToPage(0);
  //   }
  // }, []);


  const handleNextPage = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      console.log(`Changing page from ${prevIndex} to ${nextIndex}`);
      scrollToPage(nextIndex);
      return nextIndex;
    });
  };

  const handleReset = () => {
    setActiveIndex(0);
    setIsSubmitted(false);
    setStory(null);
    setVideoUrl(null);
    setTimeout(() => {
      scrollToPage(0);
    }, 100);
  };


  // const handleLogout = () => {
  //   localStorage.removeItem('token'); 
  //   setIsLoggedIn(false); 
  // };
  const handleLogout = () => {
    Swal.fire({
      title: '確定要登出嗎？',
      text: "登出後故事會一去不回。",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '忍痛離開',
      cancelButtonText: '我再想想'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token'); 
        setIsLoggedIn(false); 
        console.log('islogin?',isLoggedIn)
      }
    });
  };
  const scrollToPage = (index) => {
    const page = document.getElementById(`page-${index}`);
    if (page) {
      page.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isLoggedIn && activeIndex > 0) {
      scrollToPage(activeIndex);
    }
  }, [activeIndex, isLoggedIn]);


  return (
    <Container ref={containerRef}>
      <StartPage onLogin={handleLogin} onLogout={handleLogout}/>
      {isLoggedIn && activeIndex >= 0 && (
        <CreateStory
          onNextPage={handleNextPage}
          setActiveStory={setStory}
          activeIndex={activeIndex}
          steps={steps}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          id="page-0"
        />
      )}
      {isLoggedIn && activeIndex >= 1 && (
        <NewStory
          onNextPage={handleNextPage}
          story={story}
          activeIndex={activeIndex}
          steps={steps}
          setCharacterData={setCharacterData}
          id="page-1"
        />
      )}
      {isLoggedIn && activeIndex >= 2 && (
        <CharacterAnalyze
          onNextPage={handleNextPage}
          activeIndex={activeIndex}
          steps={steps}
          characterData={characterData}
          setPageData={setPageData}
          id="page-2"
        />
      )}
      {isLoggedIn && activeIndex >= 3 && (
        <ParagraphAnalyze
          onNextPage={handleNextPage}
          setActiveVideoUrl={setVideoUrl}
          activeIndex={activeIndex}
          steps={steps}
          pageData={pageData}
          id="page-3" />
      )}
      {isLoggedIn && activeIndex >= 4 && (
        <NewVideo
          videoUrl={videoUrl}
          onNextPage={handleNextPage}
          activeIndex={activeIndex}
          steps={steps}
          id="page-4" />
      )}
      {isLoggedIn && activeIndex >= 5 && (
        <DownloadVideo
          videoUrl={videoUrl}
          onNextPage={handleReset}
          activeIndex={activeIndex}
          steps={steps}
          id="page-5" />
      )}
      <ContactPage />
    </Container>
  );
};

export default Home;


