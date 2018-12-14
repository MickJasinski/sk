import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// import { Link } from 'gatsby'

import Header from '../components/header'

import homeArtwork from '../images/homeArtwork.svg';
import stethoscope from '../images/stethoscope.svg';

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,900'); 
  body {
    margin: 0;
    font-family: 'Montserrat';
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`; 

// styled components
const HomeArtwork = styled.img`
  max-height: 400px;
`;

const Stethoscope = styled.img`
  width: 140px;
`;

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <Header />
    <HomeArtwork src={homeArtwork} />
    <Stethoscope src={stethoscope} />
  </div>
)

export default IndexPage
