import styled from 'styled-components'

import Divider from '../common/Divider'

const StyledFooter = styled.footer`
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  font-size: small;
  padding-bottom: 20px;
`

const StyledContent = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledColumn = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

const StyledItem = styled.li`

`

const CopyrightText = styled.div`
  text-align: center;
  padding: 10px;
`

function Footer() {
  return (
    <StyledFooter>
      <Divider />
      <StyledContent>
        <StyledColumn>
          <StyledItem>About us</StyledItem>
          <StyledItem>Terms of use</StyledItem>
          <StyledItem>Privacy policy</StyledItem>
        </StyledColumn>
        <StyledColumn>
          <StyledItem>Facebook</StyledItem>
          <StyledItem>Twitter</StyledItem>
          <StyledItem>Instagram</StyledItem>
        </StyledColumn>
      </StyledContent>
      <CopyrightText>&copy; Copyright TIDALCOUTURE&nbsp; | &nbsp;All rights reserved</CopyrightText>
    </StyledFooter>
  )
}

export default Footer
