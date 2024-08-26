// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';
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
  box-sizing: border-box;
  padding: 20px;
`;

export const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
