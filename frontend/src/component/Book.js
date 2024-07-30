import React, { useRef, useCallback, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styled from 'styled-components';

const BookContainer = styled.div`
width: 300px;
height: 400px;
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

const SequenceButton = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const Book = ({ pages }) => {
  const bookRef = useRef(null);
  const globalAudioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const onFlip = useCallback((e) => {
    console.log('Current page: ' + e.data);
  }, []);

  const handleSequencePlay = async () => {
    for (let i = 0; i < pages.length; i++) {
      for (let j = 0; j < pages[i].content.length; j++) {
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
      if (i < pages.length - 1) {
        bookRef.current.pageFlip().flipNext();
        await new Promise((resolve) => {
          setTimeout(resolve, 1000); // Adjust the delay for flipping animation
        });
      }
    }
  };

  return (
    <BookContainer>
      <SequenceButton onClick={handleSequencePlay}>Play All</SequenceButton>
      <HTMLFlipBook
        // width={400}
        // height={600}
        size="stretch"
        width={500} //直接顯示的大小，要考慮page內容
        height={500}
        //size="fixed"
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
        showCover={true}
        mobileScrollSupport={true}
        ref={bookRef}
        onFlip={onFlip}
      >
        {pages.map((page, pageIndex) => (
          <Page
            key={pageIndex}
            title={page.title}
            content={page.content}
            image={page.image}
            audio={page.audio}
            globalAudioRefs={globalAudioRefs}
            playingIndex={playingIndex}
            setPlayingIndex={setPlayingIndex}
            pageIndex={pageIndex}
          />
        ))}
      </HTMLFlipBook>
    </BookContainer>
  );
};

export default Book;
