import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

  a {
    text-decoration: none;
    color: red;
    transition: 1s;
  }

  a:hover {
    color: darkred;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>
        <NextLink href='/'>
          <a>Community Site</a>
        </NextLink>
      </h1>
    </StyledHeader>
  );
};

export default Header;
