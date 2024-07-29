import React,{useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import StartPage from './StartPage';
import CreateStory from './CreateStory';
import NewStory from './NewStory';
import ContactPage from './ContactPage';
// import TestPage from './testPage';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
// import Page4 from './Page4';
// import Page5 from './Page5';
// import Page6 from './Page6';
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
    const [story, setStory] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null); 
    const [isSubmitted, setIsSubmitted] = useState(false); 
  
    const handleLogin = () => {
        setIsLoggedIn(true);
        setTimeout(() => {
          scrollToPage(0);
        }, 100); 
      };
    
      const handleNextPage = () => {
        setActiveIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
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
          <StartPage onLogin={handleLogin} />
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
          id="page-1"
        />
      )}
          {/* {isLoggedIn && activeIndex >= 2 && (
            <Page3 onNextPage={handleNextPage} activeIndex={activeIndex} steps={steps} id="page-2" />
          )}
          {isLoggedIn && activeIndex >= 3 && (
            <Page4 onNextPage={handleNextPage} setActiveVideoUrl={setVideoUrl} activeIndex={activeIndex} steps={steps} id="page-3" />
          )}
          {isLoggedIn && activeIndex >= 4 && (
            <Page5 videoUrl={videoUrl} onNextPage={handleNextPage} activeIndex={activeIndex} steps={steps} id="page-4"/>
          )}
            {isLoggedIn && activeIndex >= 5 && (
           <Page6 videoUrl={videoUrl} onNextPage={handleReset} activeIndex={activeIndex} steps={steps} id="page-5" />
          )} */}
          <ContactPage />
        </Container>
    );
  };
  
  export default Home;


