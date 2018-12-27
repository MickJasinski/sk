import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// import { Link } from 'gatsby'

import { colors } from '../utilities/utl'
import Header from '../components/header'

import homeArtwork from '../images/homeArtwork.svg';
import stethoscope from '../images/stethoscope.svg';

//////// Global styles
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

//////// styled components
const HomeArtworkWrap = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const HomeArtwork = styled.img`
  width: 100%;
`;

const BannerTxt = styled.h1`
  color: ${colors.darkBlue};
  position: absolute;
  top: 100px;
  left: 20px;
  @media (max-width: 1100px) {
    font-size: 22px;
    top: 48px;
    left: 0;
  }
  @media (max-width: 700px) {
    font-size: 14px;
    top: 32px;
    left: 0;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    top: 24px;
    left: 0;
  }
`;

const AnimateTxtOne = styled.h1`
  color: white;
  position: absolute;
  top: 140px;
  left: 410px;
`;

const Stethoscope = styled.img`
  width: 140px;
`;

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <Header />
    <HomeArtworkWrap>
      <BannerTxt>Rozwiążemy<br/>problem z Twoim</BannerTxt>
      <AnimateTxtOne>Komputerem</AnimateTxtOne>
      {/* <AnimateTxtTwo>Tabletem</AnimateTxtTwo>
      <AnimateTxtThree>Smartfonem</AnimateTxtThree> */}
      <HomeArtwork src={homeArtwork} />
    </HomeArtworkWrap>
    <Stethoscope src={stethoscope} />
  </div>
)

export default IndexPage
