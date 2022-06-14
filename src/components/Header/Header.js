import { useState } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background: #e8e6e6;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`

const StyledLogo = styled.text`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 165px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2px;
`

const StyledLi = styled.li`
  display: inline-block;
  padding: 20px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: palevioletred;
  }
  &:active {
    color: red;
  }
`

const StyledSearchBar = styled.div`
  border-top: 1px solid white;
  width: 100%;
  height: 50px;
  background: #e8e6e6;
`

function Header() {
  const [ searchBarOpen, setSearchBarOpen ] = useState(false)

  return <>
    <StyledNav>
      <StyledUl>
        <StyledLi>Featured</StyledLi>
        <StyledLi>For him</StyledLi>
        <StyledLi>For her</StyledLi>
      </StyledUl>
      <StyledLogo>TIDALCOUTURE</StyledLogo>
      <StyledUl>
        <StyledLi onClick={() => setSearchBarOpen(true)}>S</StyledLi>
        <StyledLi>Sign in</StyledLi>
        <StyledLi>Cart</StyledLi>
      </StyledUl>
    </StyledNav>
    {searchBarOpen && <StyledSearchBar onClick={() => setSearchBarOpen(false)}/>}
  </>
}

export default Header
