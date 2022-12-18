import React from 'react'

import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding: 15px 30px;
  font-size: large;

  &:focus {
    outline: none;
  }
`

const Input = ({childInputRef, ...rest}) => {
  return (
    <StyledInput
      ref={childInputRef}
      {...rest}
    />
  )
}

export default Input
