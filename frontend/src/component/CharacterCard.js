// import React from 'react';
// import styled from 'styled-components';

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-radius: 10px;
//   overflow: hidden;
//   position: relative;
//   width: 75%;
//   height: 90%;
//   background-color: #FFF;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
//   border-top: 1px solid #000;
//   border-right: 5px solid #000;
//   border-bottom: 5px solid #000;
//   border-left: 1px solid #000;
//   margin: 10px;
// `;

// const CharacterImage = styled.img`
//   height:60%;
//   max-height: 200px;
//   object-fit: cover;
//   border-bottom: 1px solid #000;
// `;

// const CharacterInfo = styled.div`
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 1rem;
//   text-align: center;
// `;

// const CharacterName = styled.h3`
//   font-size: 1.5rem;
//   margin: 2px 0;
// `;

// const CharacterDescription = styled.p`
//   font-size: 1rem;
//   margin: 3px 0;
//   overflow-y:auto;
// `;

// const AudioPlayer = styled.audio`
//   width: 100%;
//   margin: 10px auto;
//   display: block;
// `;

// const CharacterCard = ({ name, imageSrc, description, audioSrc }) => (
//   <CardContainer>
//     <Card>
//       <CharacterImage src={imageSrc} alt={name} />
//       <CharacterInfo>
//         <CharacterName>{name}</CharacterName>
//         <CharacterDescription>{description}</CharacterDescription>
//         {audioSrc && (
//           <AudioPlayer controls>
//             <source src={audioSrc} type="audio/mp3" />
//             Your browser does not support the audio element.
//           </AudioPlayer>
//         )}
//       </CharacterInfo>
//     </Card>
//   </CardContainer>
// );

// export default CharacterCard;

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 75%;
  height: 90%;
  background-color: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-top: 1px solid #000;
  border-right: 5px solid #000;
  border-bottom: 5px solid #000;
  border-left: 1px solid #000;
  margin: 10px;
`;

const CharacterImage = styled.img`
  height: 60%;
  max-height: 200px;
  object-fit: cover;
  width: 100%;
  border-bottom: 1px solid #000;
`;

const CharacterInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This ensures the audio player is pushed to the bottom */
  padding: 1rem;
  text-align: center;
`;

const CharacterName = styled.h3`
  font-size: 1.5rem;
  margin: 2px 0;
`;

const CharacterDescription = styled.p`
  font-size: 1rem;
  margin: 3px 0;
  overflow-y: auto;
  flex-grow: 1; /* This allows the description to take up remaining space */
`;

const AudioPlayer = styled.audio`
  width: 100%;
  align-self: center;
`;

const CharacterCard = ({ name, imageSrc, description, audioSrc }) => (
  <CardContainer>
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
  </CardContainer>
);

export default CharacterCard;

