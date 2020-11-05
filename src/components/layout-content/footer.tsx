import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0px;
  bottom: 0px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      Next Routing Demo | Content Site
    </StyledFooter>
  );
};

export default Footer;
