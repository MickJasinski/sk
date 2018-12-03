import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        backgroundColor: '#10262b',
        margin: '0 auto',
        // maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}>
      <h5>tel: 07860276353</h5>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#f2b33e',
            textDecoration: 'none',
          }}
        >
          <img 
            src={logo} 
            alt="logo" 
            style={{
              width: 100,
              display: 'block',
              float: 'left',
            }}></img>
          <div 
            style={{
              width: 'calc(100% - 100px)',
              paddingLeft: 130,
            }}>
            {siteTitle}
            <h3>Naprawa komputerów • smartfonów • tabletów</h3>
          </div>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
