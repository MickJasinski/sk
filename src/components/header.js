import React from 'react'
import styled from 'styled-components'
import { colors } from '../utilities/utl'
// import { Link } from 'gatsby'

import logo  from '../images/logoServ.svg';
import phone from '../images/phone.svg';


// Styled components
const ContactBar = styled.div`
  background-color: ${colors.darkBlueL};
  width: 100vw;
  height: 50px;
`;

const HeaderWrap = styled.div`
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
  @media (max-width: 500px) {
    width: 68px;
  }
`;

const Phone = styled.img`
  width: 50px;
  position: relative;
  top: 2px;
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

const Brand = styled(H1)`
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const PhoneNo = styled(H1)`
  font-size: ${({big}) => big ? '1.8rem' : '1rem'};
  line-height: 54px;
  display: block;
  width: 100%;  
  text-align: center;
  padding-right: 30px;
  margin: 0;
  margin-right: 20px;
`;

// Render
const Header = () => (
<div>
  <ContactBar>
    <PhoneNo big thin>
      <Phone src={phone}></Phone>
      0786 027 63 53
    </PhoneNo>
  </ContactBar>
    
  <HeaderWrap>
    <Logo src={logo} alt="Serwis Komputerowy - Logo" />
    <Logotype>
      <Brand>Serwis Komputerowy</Brand>
      <Brand space thin>Bedford</Brand>
    </Logotype>
  </HeaderWrap>
</div>
)

export default Header
 