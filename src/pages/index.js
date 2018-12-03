import React from 'react'
// import { Link } from 'gatsby'

import homeImg  from '../images/homeArtwork.jpg';
import stethoscope from '../images/stethoscope.svg';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <img src={homeImg} alt=""/>
    </div>
    <div>
      <img src={stethoscope} alt="stethoscope" style={{
        width: 160,
      }}/>
      <h3>Darmowa diagnoza sprzętu komputerowego. </h3>
      <p>
      Drobiazgowa diagnoza odbywa się w tym samym dniu. Kiedy sprzęt zostanie sprawdzony, skontaktujemy się w celu udzielenia szczegółowej informacji o usterce, kosztach naprawy i terminie realizacji. Następnie podejmą Państwo decyzję o przeprowadzeniu naprawy. W przypadku rezygnacji z naprawy nie ponoszą Państwo żadnych kosztów.
      </p>
    </div>

  </Layout>
)

export default IndexPage
