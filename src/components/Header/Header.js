import { useState } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background: #e8e6e6;
`

const NavBar = styled.nav`
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`

const LeftUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  gap: 10px;
`

const StyledLogo = styled.span`
  flex: 1;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2px;
`

const RightUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 10px;
`

const StyledLi = styled.li`
  display: inline-block;
  padding: 20px 10px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;

  &:hover,
  &:focus {
    color: #807e7d;
  }
  &:active {
    color: #1a0c02;
  }
`

const StyledSearchBar = styled.div`
  width: 100vw;
  height: 50px;
  background: #e8e6e6;
`

const Divider = styled.div`
  height: 1px;
  background-color: #969696;
  margin-right: 20px;
  margin-left: 20px;

`

function Header() {
  const [ searchBarOpen, setSearchBarOpen ] = useState(false)

  const logoRedirect = () => console.log("Redirecting")

  return <StyledNav>
    <NavBar>
      <LeftUL>
        <StyledLi>Featured</StyledLi>
        <StyledLi>For him</StyledLi>
        <StyledLi>For her</StyledLi>
      </LeftUL>
      <StyledLogo onClick={logoRedirect}>TIDALCOUTURE</StyledLogo>
      <RightUL>
        <StyledLi onClick={() => setSearchBarOpen(!searchBarOpen)}>S</StyledLi>
        <StyledLi>Sign in</StyledLi>
        <StyledLi>Cart</StyledLi>
      </RightUL>
    </NavBar>
    {searchBarOpen && <>
      <Divider />
      <StyledSearchBar onClick={() => setSearchBarOpen(false)}/>
    </>}
  </StyledNav>
}

export default Header
