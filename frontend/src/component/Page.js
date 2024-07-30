import React, { useRef, useEffect, forwardRef } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  transform-origin: top left;  /* 設定縮放的原點 */
`;

const PageHeader = styled.h1`
  font-size: 20px;
  margin-bottom: 2px;
`;

const PageImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const Dialogue = styled.div`
  margin-bottom: 10px;
`;

const DialogueHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
`;

const Character = styled.strong`
  display: block;
  margin-right: 10px;
`;

const DialogueText = styled.p`
  margin: 0;
  flex: 1;
  white-space: normal;  /* 允許換行 */
  overflow: hidden;
  word-break: break-word;  /* 在單詞內斷行 */
  padding-right: 10px; 
`;

const HiddenAudio = styled.audio`
  display: none;
`;

const PlayButton = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle-icons-speaker.svg/1024px-Circle-icons-speaker.svg.png?20160314153907') no-repeat center center;
  background-size: contain;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
`;

const StopButton = styled.button`
  margin-left: 10px;
  cursor: pointer;
  background: url('https://www.svgrepo.com/show/266463/play-pause.svg') no-repeat center center;
  background-size: contain;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
`;

const Page = forwardRef(({ title, content, image, globalAudioRefs, playingIndex, setPlayingIndex, pageIndex }, ref) => {
  const localAudioRefs = useRef([]);

  const handlePlayAudio = (dialogueIndex, e) => {
    e.stopPropagation(); // prevent the flip action
    globalAudioRefs.current.forEach((audioRef) => {
      if (audioRef && audioRef.pause) {
        audioRef.pause();
        audioRef.currentTime = 0;
      }
    });
    if (localAudioRefs.current[dialogueIndex]) {
      localAudioRefs.current[dialogueIndex].play();
      setPlayingIndex(`${pageIndex}-${dialogueIndex}`); // Set playing index as unique value combining page and dialogue index
    }
  };

  const handleStopAudio = (dialogueIndex, e) => {
    e.stopPropagation(); // prevent the flip action
    if (localAudioRefs.current[dialogueIndex]) {
      localAudioRefs.current[dialogueIndex].pause();
      localAudioRefs.current[dialogueIndex].currentTime = 0;
      setPlayingIndex(null);
    }
  };

  const handleAudioEnd = (dialogueIndex) => {
    if (playingIndex === `${pageIndex}-${dialogueIndex}`) {
      setPlayingIndex(null);
    }
  };

  useEffect(() => {
    const audioRefs = localAudioRefs.current;
    audioRefs.forEach((audioRef) => {
      globalAudioRefs.current.push(audioRef);
    });

    return () => {
      audioRefs.forEach((audioRef) => {
        const index = globalAudioRefs.current.indexOf(audioRef);
        if (index > -1) {
          globalAudioRefs.current.splice(index, 1);
        }
      });
    };
  }, [globalAudioRefs]);

  return (
    <PageContainer ref={ref}>
      <PageHeader>{title}</PageHeader>
      {image && <PageImage src={image} alt={title} />}
      <ContentWrapper>
        {content.map((dialogue, dialogueIndex) => (
          <Dialogue key={dialogueIndex}>
            <DialogueHeader>
              {dialogue.audio && (
                <>
                  <HiddenAudio
                    ref={el => {
                      localAudioRefs.current[dialogueIndex] = el;
                      if (el) {
                        el.dataset.pageIndex = pageIndex;
                        el.dataset.dialogueIndex = dialogueIndex;
                      }
                    }}
                    onEnded={() => handleAudioEnd(dialogueIndex)}
                  >
                    <source src={dialogue.audio} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </HiddenAudio>
                  {playingIndex === `${pageIndex}-${dialogueIndex}` ? (
                    <StopButton onClick={(e) => handleStopAudio(dialogueIndex, e)} />
                  ) : (
                    <PlayButton onClick={(e) => handlePlayAudio(dialogueIndex, e)} />
                  )}
                </>
              )}
              <Character>{dialogue.character}:</Character>
              <DialogueText>{dialogue.dialogue}</DialogueText>
            </DialogueHeader>
      
          </Dialogue>
        ))}
      </ContentWrapper>
    </PageContainer>
  );
});

export default Page;

// import React, { useRef, useEffect, forwardRef } from 'react';
// import styled from 'styled-components';

// const PageContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   box-sizing: border-box;
//   overflow: hidden;
//   position: relative; /* 確保內容不會超出容器 */
// `;

// const PageHeader = styled.h1`
//   font-size: 20px;
//   margin-bottom: 2px;
// `;

// const PageImage = styled.img`
//   width: 100%;
//   max-height: 200px;
//   object-fit: cover;
//   margin-bottom: 20px;
// `;

// const ContentWrapper = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   overflow-x: hidden; /* 防止橫向滾動 */
//   margin-bottom: 20px;
// `;

// const Dialogue = styled.div`
//   margin-bottom: 10px;
// `;

// const DialogueHeader = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 5px;
//   width: 100%;
// `;

// const Character = styled.strong`
//   display: block;
//   margin-right: 10px;
// `;

// const DialogueText = styled.p`
//   margin: 0;
//   flex: 1;
//   white-space: normal; /* 允許換行 */
//   overflow: hidden;
//   word-break: break-word; /* 在單詞內斷行 */
//   padding-right: 10px;
// `;

// const HiddenAudio = styled.audio`
//   display: none;
// `;

// const PlayButton = styled.button`
//   margin-left: 10px;
//   margin-right: 10px;
//   cursor: pointer;
//   background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle-icons-speaker.svg/1024px-Circle-icons-speaker.svg.png?20160314153907') no-repeat center center;
//   background-size: contain;
//   width: 30px;
//   height: 30px;
//   border: none;
//   outline: none;
// `;

// const StopButton = styled.button`
//   margin-left: 10px;
//   cursor: pointer;
//   background: url('https://www.svgrepo.com/show/266463/play-pause.svg') no-repeat center center;
//   background-size: contain;
//   width: 30px;
//   height: 30px;
//   border: none;
//   outline: none;
// `;

// const Page = forwardRef(({ title, content, image, globalAudioRefs, playingIndex, setPlayingIndex, pageIndex }, ref) => {
//   const localAudioRefs = useRef([]);

//   const handlePlayAudio = (dialogueIndex, e) => {
//     e.stopPropagation(); // prevent the flip action
//     globalAudioRefs.current.forEach((audioRef) => {
//       if (audioRef && audioRef.pause) {
//         audioRef.pause();
//         audioRef.currentTime = 0;
//       }
//     });
//     if (localAudioRefs.current[dialogueIndex]) {
//       localAudioRefs.current[dialogueIndex].play();
//       setPlayingIndex(`${pageIndex}-${dialogueIndex}`); // Set playing index as unique value combining page and dialogue index
//     }
//   };

//   const handleStopAudio = (dialogueIndex, e) => {
//     e.stopPropagation(); // prevent the flip action
//     if (localAudioRefs.current[dialogueIndex]) {
//       localAudioRefs.current[dialogueIndex].pause();
//       localAudioRefs.current[dialogueIndex].currentTime = 0;
//       setPlayingIndex(null);
//     }
//   };

//   const handleAudioEnd = (dialogueIndex) => {
//     if (playingIndex === `${pageIndex}-${dialogueIndex}`) {
//       setPlayingIndex(null);
//     }
//   };

//   useEffect(() => {
//     const audioRefs = localAudioRefs.current;
//     audioRefs.forEach((audioRef) => {
//       globalAudioRefs.current.push(audioRef);
//     });

//     return () => {
//       audioRefs.forEach((audioRef) => {
//         const index = globalAudioRefs.current.indexOf(audioRef);
//         if (index > -1) {
//           globalAudioRefs.current.splice(index, 1);
//         }
//       });
//     };
//   }, [globalAudioRefs]);

//   return (
//     <PageContainer ref={ref}>
//       <PageHeader>{title}</PageHeader>
//       {image && <PageImage src={image} alt={title} />}
//       <ContentWrapper>
//         {content.map((dialogue, dialogueIndex) => (
//           <Dialogue key={dialogueIndex}>
//             <DialogueHeader>
//               {dialogue.audio && (
//                 <>
//                   <HiddenAudio
//                     ref={el => {
//                       localAudioRefs.current[dialogueIndex] = el;
//                       if (el) {
//                         el.dataset.pageIndex = pageIndex;
//                         el.dataset.dialogueIndex = dialogueIndex;
//                       }
//                     }}
//                     onEnded={() => handleAudioEnd(dialogueIndex)}
//                   >
//                     <source src={dialogue.audio} type="audio/mp3" />
//                     Your browser does not support the audio element.
//                   </HiddenAudio>
//                   {playingIndex === `${pageIndex}-${dialogueIndex}` ? (
//                     <StopButton onClick={(e) => handleStopAudio(dialogueIndex, e)} />
//                   ) : (
//                     <PlayButton onClick={(e) => handlePlayAudio(dialogueIndex, e)} />
//                   )}
//                 </>
//               )}
//               <Character>{dialogue.character}:</Character>
//               <DialogueText>{dialogue.dialogue}</DialogueText>
//             </DialogueHeader>
//           </Dialogue>
//         ))}
//       </ContentWrapper>
//     </PageContainer>
//   );
// });

// export default Page;

