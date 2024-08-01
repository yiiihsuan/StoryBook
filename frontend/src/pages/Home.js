import React,{useState, useEffect, useRef } from 'react';
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

    useEffect(() => {
      const token = localStorage.getItem('token');
      console.log('Token read:', token); 
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);


    // const handleLogin = () => {
    //     setIsLoggedIn(true);
    //     setTimeout(() => {
    //       scrollToPage(0);
    //     }, 100); 
    //   };
    
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
          <StartPage  />
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
            id="page-4"/>
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


