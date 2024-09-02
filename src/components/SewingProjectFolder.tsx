import styled from 'styled-components';
import sketch from '../assets/sketch.jpg';
import dress from '../assets/dress.jpg';
import feathers from '../assets/feathers.jpg';

const StyledDiv = styled.div`
display: flex;
align-items: center;
width: 100%;
flex-direction: column;
background-color: #E1A098;
border: 2px solid black;
`;

const StyledH1 = styled.h1`
    text-align: center;
`;

const StyledButton = styled.button`
    margin-bottom: 13px;
`;

const StyledCategoryAndImg = styled.div`
    display: flex;
`;

const Img = styled.img`
border: 1px solid black;
width: 150px;
height: 150px;
`;

const StyledCategory = styled.p`
border: 1px dotted red;
border-radius: 16px;
font-size: 10px;
text-align: center;
width: 50%;
margin: 0;
`;

export const SewingProjectFolder = () => {
  const createFolder = () => {
    console.log('Just logging for now');
  };

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
        <StyledButton type="button" onClick={createFolder}>
          Add a new Project!
        </StyledButton>
        <StyledCategoryAndImg>
          {imagesArray.map((image) => (
            <div key={image.id}>
              <Img src={image.src} alt={image.category} />
              <StyledCategory>{image.category}</StyledCategory>
            </div>
          ))}
        </StyledCategoryAndImg>
      </StyledDiv>
    </>
  );
};
