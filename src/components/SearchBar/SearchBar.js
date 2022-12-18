import React from 'react';
import styled from 'styled-components'
import { useFormik } from 'formik';

import Input from '../common/Input'

const Wrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;

  input:focus::placeholder {
    opacity: 1;
    color: #999999;
  }
`

const Search = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: transparent;
`

const SearchBar = props => {

  const formik = useFormik({
    initialValues: {
      searchString: '',
    },
    onSubmit: values => {
      console.log(`Searching for ${values.searchString}`);
    },
  })

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Input
        id="searchString"
        key="searchString"
        type="text"
        placeholder="Search here"
        onChange={formik.handleChange}
        {...props}
      />
      <Search type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Search>
    </Wrapper>
  )
}

export default SearchBar
