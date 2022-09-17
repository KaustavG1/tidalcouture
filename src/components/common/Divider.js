import styled from 'styled-components'

const StyledDivider = styled.footer`
  height: 1px;
  background-color: #969696;
  margin-right: 20px;
  margin-left: 20px;
`

function Divider() {
  return (
    <StyledDivider />
  )
}

export default Divider
