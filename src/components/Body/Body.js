import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  height: 100vh;
  bottom: 0px;
  display: flex;
  flex-direction: column;
`

function Footer() {
  return (
    <StyledFooter>
      This is a footer
    </StyledFooter>
  )
}

export default Footer
