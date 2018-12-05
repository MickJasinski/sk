import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'

import logo  from '../images/logo.svg';


const HeaderStyle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background: #213644;
`;


const Header = () => (
  <HeaderStyle>
    <img src={logo} alt="Serwis Komputerowy - Logo" />
  </HeaderStyle>
)

export default Header
