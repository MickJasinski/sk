import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// import { Link } from 'gatsby'

import Header from '../components/header'

import homeArtwork from '../images/homeArtwork.svg';
import stethoscope from '../images/stethoscope.svg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800,900'); 

  body {
    margin: 0;
    font-family: 'Montserrat';
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`; 

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <Header />
    <img src={homeArtwork} />
    <img src={stethoscope} />
  </div>
)

export default IndexPage
