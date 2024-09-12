import styled from 'styled-components';

type CenteredLayoutProps = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ECD8CE;
  height: 100vh;
  width: 100vw;
`;

export const CenteredLayout = ({ children }: CenteredLayoutProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
