import React from 'react'
import styled from 'styled-components'
import { colors } from '../utilities/utl'
// import { Link } from 'gatsby'

import logo  from '../images/logoServ.svg';
import phone from '../images/phone.svg';


// Styled components
const HeaderStyle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: ${colors.darkBlue};
`;

const Logotype = styled.div `
  display: block;
  width: 100%;
  max-width: 300px;
  text-align: center;
  float: left;
`;
const Logo = styled.img`
  width: 80px;
  padding: 10px 0 10px 30px;
`;

const Phone = styled.img`
  width: 50px;
  padding-right: 23px;
`;

const H1 = styled.h1`
  font-size: ${({big}) => big ? '2.4rem' : '1.4rem'};
  text-transform: uppercase;
  line-height: .2;
  letter-spacing: ${({space}) => space ? '16px' : '0'};
  color: ${colors.yellow};
  font-weight: ${({thin}) => thin ? '200' : '900'};
`;

const PhoneWrap = styled(H1)`
  font-size: ${({big}) => big ? '2rem' : '1rem'};
  display: block;
  width: 100%;  
  text-align: right;
  padding-right: 30px;
`;

// Render
const Header = () => (
  <HeaderStyle>
    <Logo src={logo} alt="Serwis Komputerowy - Logo" />
    <Logotype>
      <H1>Serwis Komputerowy</H1>
      <H1 space thin>Bedford</H1>
    </Logotype>
    <PhoneWrap big thin>
      <Phone src={phone}></Phone>
      0786 027 63 53
    </PhoneWrap>
  </HeaderStyle>
)

export default Header
 