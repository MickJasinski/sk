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

const Cont = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
`;

const Stethoscope = styled.img`
  width: 100px;
  display: block;
  margin-right: 40px;
  float: left;
`;

const Txt = styled.div`
  width: 100%;
`;

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <Header />
    <HomeArtwork src={homeArtwork} />
    <Cont>
      <Stethoscope src={stethoscope} />
      <Txt>Darmowa diagnoza sprzętu komputerowego. Drobiazgowa diagnoza odbywa się w tym samym dniu. Kiedy sprzęt zostanie sprawdzony, skontaktujemy się w celu udzielenia szczegółowej informacji o usterce, kosztach naprawy i terminie realizacji. Następnie podejmą Państwo decyzję o przeprowadzeniu naprawy. W przypadku rezygnacji z naprawy nie ponoszą Państwo żadnych kosztów.</Txt>
    </Cont>
  </div>
)

export default IndexPage
