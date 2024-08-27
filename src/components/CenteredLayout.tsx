import styled from 'styled-components';

type CenteredLayoutProps = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`;

export const CenteredLayout = ({ children }: CenteredLayoutProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
