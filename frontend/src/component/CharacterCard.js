// import React from 'react';
// import styled from 'styled-components';

// const Card = styled.div`
// display: flex;
// flex-direction: column; 
// border-radius: 10px;  
// overflow: hidden;
// position: relative;
// width: 22%; 
// height: 100%;
// min-width: 180px;
// background-color: #FFF;
// box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); //shadow
// border-top: 1px solid #000;
// border-right: 5px solid #000;
// border-bottom: 5px solid #000;
// border-left: 1px solid #000;
// margin: 10px;

// @media (max-width: 1200px) {
//   width: 22vw; // 中等屏幕
// }

// @media (max-width: 768px) {
//   width: 40vw; // 小屏幕
// }

// @media (max-width: 480px) {
//   width: 80vw; // 超小屏幕
// }
// `;

// const CharacterImage = styled.img`
//   width: 100%;
//   //height: auto; 
//   max-height: 30%; 
//   object-fit: cover;
// `;

// const CharacterInfo = styled.div`
//   flex-grow: 1; 
//   padding: 1rem; // 调整内部间距
// `;

// const CharacterName = styled.h3`
//   font-size: 1.2rem; // 增大字体大小
//   margin: 0.5rem 0;
//   text-align: center; // 名字居中显示
// `;

// const CharacterDescription = styled.p`
//   font-size: 0.9rem;
//   margin: 0.5rem 0;
//   text-align: center; 
// `;

// const AudioPlayer = styled.audio`
//   width: 100%; 
//   margin: 10px auto; 
//   display: block;
// `;

// const CharacterCard = ({ name, imageSrc, description, audioSrc  }) => (
//   <Card>
//     <CharacterImage src={imageSrc} alt={name} />
//     <CharacterInfo>
//       <CharacterName>{name}</CharacterName>
//       <CharacterDescription>{description}</CharacterDescription>
//       {audioSrc && (
//         <AudioPlayer controls>
//           <source src={audioSrc} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </AudioPlayer>
//       )}
//     </CharacterInfo>
//   </Card>
// );

// export default CharacterCard;

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 300px;
  min-width: 180px;
  background-color: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-top: 1px solid #000;
  border-right: 5px solid #000;
  border-bottom: 5px solid #000;
  border-left: 1px solid #000;
  margin: 10px;
`;

const CharacterImage = styled.img`
  width: 100%;
  max-height: 150px; 
  object-fit: cover;
  border-bottom: 1px solid #000;
`;

const CharacterInfo = styled.div`
  flex-grow: 1;
  padding: 1rem;
  text-align: center;
`;

const CharacterName = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const CharacterDescription = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  margin: 10px auto;
  display: block;
`;

const CharacterCard = ({ name, imageSrc, description, audioSrc }) => (
  <Card>
    <CharacterImage src={imageSrc} alt={name} />
    <CharacterInfo>
      <CharacterName>{name}</CharacterName>
      <CharacterDescription>{description}</CharacterDescription>
      {audioSrc && (
        <AudioPlayer controls>
          <source src={audioSrc} type="audio/mp3" />
          Your browser does not support the audio element.
        </AudioPlayer>
      )}
    </CharacterInfo>
  </Card>
);

export default CharacterCard;
