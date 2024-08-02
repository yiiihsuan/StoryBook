//電子書設定

import React, { useRef, useCallback, useState} from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styled from 'styled-components';
import { FaRegCirclePlay, FaRegCircleStop } from "react-icons/fa6";

const BookContainer = styled.div`
  width: 100%;
  height: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

const PageWrapper = styled.div`
  width: 90%; 
  height: 90%; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBase = styled.button`
  position: absolute;
  top: 10px;
  left: 10%;
  margin: 2px;
  padding: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  color: white; 
  border: 3px solid white; 
  border-radius: 50%;
  outline: none;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px; 
`;

const PlayButton = styled(ButtonBase)`
    background-color: #F5D4D4; 
  color: #000; 
  opacity:0.8;
`;

const StopButton = styled(ButtonBase)`
  background-color: #E1FEF6; 
  color: #000;
  opacity:0.8;
`;



const Book = ({ pages }) => {
  const bookRef = useRef(null);
  const globalAudioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const onFlip = useCallback((e) => {
    console.log('Current page: ' + e.data);
  }, []);

  const handlePlayAll = async () => {
    console.log('Starting playback...');
    setIsPlaying(true);

    for (let i = 0; i < pages.length; i++) {
      for (let j = 0; j < pages[i].content.length; j++) {
        const audioRef = globalAudioRefs.current.find(
          ref => ref.dataset.pageIndex == i && ref.dataset.dialogueIndex == j
        );
        if (audioRef) {
          await audioRef.play();
          await new Promise(resolve => audioRef.onended = resolve);
        }
      }

      if (window.innerWidth < 1000 || i % 2 === 1) {
        bookRef.current.pageFlip().flipNext();
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    setIsPlaying(false);
  };

  const handleStop = () => {
    console.log('Stopping playback...');
    globalAudioRefs.current.forEach((audioRef) => {
      if (audioRef) {
        audioRef.pause();
        audioRef.currentTime = 0;
      }
    });

    setIsPlaying(false);
    bookRef.current.pageFlip().turnToPage(0);
  };

  return (
    <BookContainer>
      {!isPlaying ? (
        <PlayButton onClick={handlePlayAll}><FaRegCirclePlay /></PlayButton>
      ) : (
        <StopButton onClick={handleStop}><FaRegCircleStop /></StopButton>
      )}
      <HTMLFlipBook
        //size="stretch" //顯示方式
        width={400} //修改book頁面大小
        height={500}
        size="fixed"
        minWidth={300}
        maxWidth={600}
        minHeight={400}
        maxHeight={800}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        //showCover={true}  //顯示封面
        showCover={false}
        mobileScrollSupport={true}
        ref={bookRef}
        onFlip={onFlip}
        style={{ margin: '0 auto', position: 'relative' }}
      >
        {pages.map((page, pageIndex) => (
          <PageWrapper key={pageIndex}>
            <Page
              title={page.title}
              content={page.content}
              image={page.image}
              audio={page.audio}
              globalAudioRefs={globalAudioRefs}
              playingIndex={playingIndex}
              setPlayingIndex={setPlayingIndex}
              pageIndex={pageIndex}
            />
          </PageWrapper>
        ))}
      </HTMLFlipBook>
    </BookContainer>
  );
};

export default Book;

