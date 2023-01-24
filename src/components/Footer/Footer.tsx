import styled from 'styled-components';

import Divider from '../common/Divider';

const StyledFooter = styled.footer`
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  font-size: small;
  padding-bottom: 20px;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledColumn = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.li`
  padding-bottom: 10px;
  text-transform: uppercase;
  color: #696969;
  font-size: 12px;
`;

const StyledAnchor = styled.a`
  padding-bottom: 5px;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 10px;

  &:hover {
    color: #696969;
  }
`;

const CopyrightText = styled.div`
  text-align: center;
  padding-top: 10px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Divider />
      <StyledContent>
        <StyledColumn>
          <StyledItem>Company Policies</StyledItem>
          <StyledAnchor>Shipping & Returns</StyledAnchor>
          <StyledAnchor>Terms of use</StyledAnchor>
          <StyledAnchor>Privacy policy</StyledAnchor>
        </StyledColumn>
        <StyledColumn>
          <StyledItem>Follow us on</StyledItem>
          <StyledAnchor href="https://www.facebook.com">Facebook</StyledAnchor>
          <StyledAnchor href="https://www.twitter.com">Twitter</StyledAnchor>
          <StyledAnchor href="https://www.instagram.com">
            Instagram
          </StyledAnchor>
        </StyledColumn>
      </StyledContent>
      <CopyrightText>
        &copy; Copyright TIDALCOUTURE&nbsp; | &nbsp;All rights reserved
      </CopyrightText>
    </StyledFooter>
  );
}

export default Footer;
