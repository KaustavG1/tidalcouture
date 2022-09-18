import styled from 'styled-components'

const StyledSpacer = styled.footer`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`

function Spacer({ height = 0, width = 0 }) {
  return (
    <StyledSpacer height={height} width={width}/>
  )
}

export default Spacer
