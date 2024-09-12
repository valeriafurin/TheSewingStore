import styled from 'styled-components';
import sketch from '../assets/sketch.jpg';
import dress from '../assets/dress.jpg';
import feathers from '../assets/feathers.jpg';

const StyledDiv = styled.div`
display: grid;
place-items: center;
width: 100%;
background-color: #E1A098;
border: 2px solid black;
`;

const StyledH1 = styled.h1`
    text-align: center;
`;

const StyledCategoryAndImg = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    margin: 20px 0;
`;

const Img = styled.img`
border: 2px solid black;
width: 150px;
height: 150px;
`;

const StyledCategory = styled.p`
border-radius: 16px;
font-size: 15px;
font-weight: bold;
text-align: left;
margin: 0;
`;

export const SewingProjectFolder = () => {
  const imagesArray = [
    {
      src: dress,
      category: 'Dress',
      id: 1,
    },
    {
      src: feathers,
      category: 'Feathers',
      id: 2,
    },
    {
      src: sketch,
      category: 'Sketch',
      id: 3,
    },
  ];

  return (
    <>
      <StyledDiv>
        <StyledH1>Your latest projects:</StyledH1>
        <StyledCategoryAndImg>
          {imagesArray.map((image) => (
            <div key={image.id}>
              <Img src={image.src} alt={image.category} />
              <StyledCategory>Category: {image.category}</StyledCategory>
            </div>
          ))}
        </StyledCategoryAndImg>
      </StyledDiv>
    </>
  );
};
