import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Footer from './footer';
import Header from './header';

const StyledContainer = styled(Container)`
  padding-top: 25px;;
  height: 100vh - 60px;
`;

export interface IOptions {

}

const withContentAppLayout = (options: IOptions = {}) => {
  return <P extends {}>(Component: React.ComponentType<P>): React.FC<P> => {
    return (props): JSX.Element => (
      <StyledContainer>
        <Header />
        <Component {...props} />
        <Footer />
      </StyledContainer>
    );
  }
};

export default withContentAppLayout;