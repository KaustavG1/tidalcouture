import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { useForm } from "react-hook-form";

import Input from '../common/Input'

const Wrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Search = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: transparent;
`

function SearchBar({ passToParent }) {
  const { handleSubmit, reset, register } = useForm()
  const { ref, ...rest } = register('search');
  const searchRef = useRef(null)

  const submitData = data => {
    console.log(`Searching for ${data}`)
  }

  const focus = () => searchRef.current.focus()

  useEffect(() => passToParent(reset, focus), [])

  return (
    <Wrapper onSubmit={handleSubmit(({ search }) => submitData(search))}>
      <Input
        {...rest}
        name="search"
        placeholder="Search here"
        defaultValue=""
        ref={(e) => {
          ref(e)
          searchRef.current = e
        }}
      />
      <Search type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Search>
    </Wrapper>
  )
}

export default SearchBar
