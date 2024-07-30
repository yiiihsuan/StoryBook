import React, { useRef, useCallback, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styled from 'styled-components';

const BookContainer = styled.div`
width: 100%;
height: 100%
  // width: 600px;
  // height: 800px;
  // margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
`;



const PageWrapper = styled.div`
  width: 90%; /* 調整這裡以設置邊距 */
  height: 90%; /* 調整這裡以設置邊距 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SequenceButton = styled.button`
  position: absolute;
  top: 10px;
  left: 8%;
  margin: 2px;
  padding: 0; 
  width: 50px; 
  height: 50px;
  cursor: pointer;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  z-index: 10;
  &:hover {
    background-color: #0056b3;
  }
`;





const Book = ({ pages }) => {
  const bookRef = useRef(null);
  const globalAudioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const onFlip = useCallback((e) => {
    console.log('Current page: ' + e.data);
  }, []);

  // const handleSequencePlay = async () => {
  //   for (let i = 0; i < pages.length; i++) {
  //     for (let j = 0; j < pages[i].content.length; j++) {
  //       const audioRef = globalAudioRefs.current.find(
  //         (ref) => ref.dataset.pageIndex == i && ref.dataset.dialogueIndex == j
  //       );
  //       if (audioRef) {
  //         audioRef.play();
  //         await new Promise((resolve) => {
  //           audioRef.onended = resolve;
  //         });
  //       }
  //     }
  //     if (i < pages.length - 1) {
  //       bookRef.current.pageFlip().flipNext();
  //       await new Promise((resolve) => {
  //         setTimeout(resolve, 1000); // Adjust the delay for flipping animation
  //       });
  //     }
  //   }
  // };




  const [stopPlayback, setStopPlayback] = useState(false);
  
  const handleSequencePlay = async () => {
    if (isPlaying) {
      setStopPlayback(true);
      console.log('is playing?',isPlaying )
      console.log('stopPlayback state:',stopPlayback )
      globalAudioRefs.current.forEach((audioRef) => {
        if (audioRef) {
          audioRef.pause();
          audioRef.currentTime = 0;
        }
      });
      setIsPlaying(false);
      console.log('is playing?:',isPlaying )
      console.log('stopPlayback state:',stopPlayback )
      bookRef.current.pageFlip().turnToPage(0);
    } else {
      setIsPlaying(true);
      setStopPlayback(false);
      console.log('is playing?: & will start play',isPlaying )
      console.log('stopPlayback state:',stopPlayback )
  
      for (let i = 0; i < pages.length && !stopPlayback; i++) {
        for (let j = 0; j < pages[i].content.length && !stopPlayback; j++) {
          const audioRef = globalAudioRefs.current.find(
            (ref) => ref.dataset.pageIndex == i && ref.dataset.dialogueIndex == j
          );
          if (audioRef) {
            audioRef.play();
            await new Promise((resolve) => {
              audioRef.onended = resolve;
            });
          }
        }

        if ((window.innerWidth < 1000 || i % 2 === 1) && !stopPlayback) {
          //index 為奇數時翻頁 or small size every page
          bookRef.current.pageFlip().flipNext();
          await new Promise((resolve) => {
            setTimeout(resolve, 1000); // 翻頁延遲時間
          });

        // if (i < pages.length - 1 && !stopPlayback) {
        //   bookRef.current.pageFlip().flipNext();
        //   await new Promise((resolve) => {
        //     setTimeout(resolve, 1000); // Adjust the delay for flipping animation
        //   });



        }
      }
      setIsPlaying(false);
      console.log('playing state:',isPlaying )
    }
  };

  return (
    <BookContainer>
      {/* <SequenceButton onClick={handleSequencePlay}>Play All</SequenceButton> */}
      <SequenceButton onClick={handleSequencePlay }>
        {isPlaying ? 'Stop' : 'Play All'}
      </SequenceButton>
      <HTMLFlipBook
        // width={400}
        // height={600}
        //size="stretch"
        width={400} //直接顯示的大小，要考慮page內容
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
        //showCover={true}
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


