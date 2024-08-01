import React, { useRef, useCallback, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styled from 'styled-components';
import { FaRegCirclePlay, FaRegCircleStop } from "react-icons/fa6";

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
  color: white; // Change this as needed
  border: 3px solid white; // Adjust border color to match your theme
  border-radius: 50%;
  outline: none;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px; // Adjust icon size
  // &:hover {
  //   background-color: #0056b3;
  // }
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
  const [stopPlayback, setStopPlayback] = useState(false);



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
      {/* <SequenceButton onClick={handleSequencePlay}>Play All</SequenceButton> */}
      {/* <SequenceButton onClick={handleSequencePlay }>
        {isPlaying ? 'Stop' : 'Play All'}
      </SequenceButton> */}
      {!isPlaying ? (
        <PlayButton onClick={handlePlayAll}><FaRegCirclePlay /></PlayButton>
      ) : (
        <StopButton onClick={handleStop}><FaRegCircleStop /></StopButton>
      )}
      <HTMLFlipBook
        //size="stretch" //顯示方式
        width={400} //直接顯示的大小
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


//翻頁邏輯

      // if (i < pages.length - 1 && !stopPlayback) {
        //   bookRef.current.pageFlip().flipNext();
        //   await new Promise((resolve) => {
        //     setTimeout(resolve, 1000); // Adjust the delay for flipping animation
        //   });


        //原始的播放邏輯 但必須多案一次才可以再次播放
          
  // const handleSequencePlay = async () => {
  //   if (isPlaying) {
  //     setStopPlayback(true);
  //     console.log('now is playing, is playing?',isPlaying )
  //     console.log('now is playing, stopPlayback state:',stopPlayback )
  //     globalAudioRefs.current.forEach((audioRef) => {
  //       if (audioRef) {
  //         audioRef.pause();
  //         audioRef.currentTime = 0;
  //       }
  //     });
  //     setIsPlaying(false);
  //     setStopPlayback(true);
  //     console.log('now play but want stop is playing?:',isPlaying )
  //     console.log('now play but want stop stopPlayback state:',stopPlayback )
  //     bookRef.current.pageFlip().turnToPage(0);
  //   } else {
  //     console.log('check is playing?',isPlaying )
  //     console.log('check stop?',stopPlayback )
  //     setIsPlaying(true);
  //     setStopPlayback(false);
  //     console.log('now is not play want start playing?: & will start play',isPlaying )
  //     console.log('now is not play how is stop?:',stopPlayback )
  
  //     for (let i = 0; i < pages.length && !stopPlayback; i++) {
  //       for (let j = 0; j < pages[i].content.length && !stopPlayback; j++) {
  //         const audioRef = globalAudioRefs.current.find(
  //           (ref) => ref.dataset.pageIndex == i && ref.dataset.dialogueIndex == j
  //         );
  //         if (audioRef) {
  //           audioRef.play();
  //           await new Promise((resolve) => {
  //             audioRef.onended = resolve;
  //           });
  //         }
  //       }

  //       if ((window.innerWidth < 1000 || i % 2 === 1) && !stopPlayback) {
  //         //index 為奇數時翻頁 or small size every page
  //         bookRef.current.pageFlip().flipNext();
  //         await new Promise((resolve) => {
  //           setTimeout(resolve, 1000); // 翻頁延遲時間
  //         });
  //       }
  //     }
  //     setIsPlaying(false);
  //     console.log('playing state:',isPlaying )
  //   }
  // };




  // const PlayButton = styled.button`
//   position: absolute;
//   top: 10px;
//   left: 10%;
//   margin: 2px;
//   padding: 0; 
//   width: 50px; 
//   height: 50px;
//   cursor: pointer;
//   background-color: #dc3545;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   outline: none;
//   z-index: 10;
//   &:hover {
//     background-color: #0056b3;
//   }

// //  @media (max-width: 768px) {

// //   }
// //    @media (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {

// //   }
// `;

// const StopButton = styled.button`
//   position: absolute;
//   top: 10px;
//   left: 10%;
//   margin: 2px;
//   padding: 0; 
//   width: 50px; 
//   height: 50px;
//   cursor: pointer;
//   background-color: #dc3545;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   outline: none;
//   z-index: 10;
//   &:hover {
//     background-color: #0056b3;
//   }

// //  @media (max-width: 768px) {

// //   }
// //    @media (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {

// //   }
// `;




