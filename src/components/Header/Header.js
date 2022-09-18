import { useState } from 'react'
import styled from 'styled-components'

import Divider from '../common/Divider'
import SearchBar from '../SearchBar/SearchBar'

const StyledNav = styled.nav`
  width: 100%;
  position: sticky;
  top: 0px;
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
  text-transform: uppercase;
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

const SearchWrapper = styled.div`
  width: 100%;
  opacity: ${({ open }) => open ? 1 : 0};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  position: absolute;
  top: 100%;
  transition: all 0.4s ease;
`

function Header() {
  const [ searchBarOpen, setSearchBarOpen ] = useState(false)
  const [ childData, setChildData ] = useState({})

  const toggleSearchBar = (event) => {
    event.stopPropagation()
    setSearchBarOpen(!searchBarOpen)
    if (searchBarOpen) {
      setTimeout(childData.data, 500)
    }

    childData.focus()
  }

  const logoRedirect = () => console.log("Redirecting")

  const passToParent = (data, focus) => setChildData({data, focus})

  return <StyledNav>
    <NavBar>
      <LeftUL>
        <StyledLi>Featured</StyledLi>
        <StyledLi>For him</StyledLi>
        <StyledLi>For her</StyledLi>
      </LeftUL>
      <StyledLogo onClick={logoRedirect}>Tidalcouture</StyledLogo>
      <RightUL>
        <StyledLi onClick={toggleSearchBar}>
          {
            searchBarOpen ?
            <i className="fa-solid fa-xmark"></i> :
            <i className="fa-solid fa-magnifying-glass"></i>
          }
        </StyledLi>
        <StyledLi>Sign in</StyledLi>
        <StyledLi>
          <i className="fa-solid fa-cart-shopping"></i>
        </StyledLi>
      </RightUL>
    </NavBar>
    <SearchWrapper open={searchBarOpen}>
      <Divider />
      <SearchBar passToParent={passToParent} />
    </SearchWrapper>
  </StyledNav>
}

export default Header
