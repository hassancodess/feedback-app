import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Header({ text, bgColor, txtColor }) {
  const HeaderStyles = {
    backgroundColor: bgColor,
    color: txtColor,
  }

  return (
    <>
      <header style={HeaderStyles}>
        <div className='container'>
          <Link to='/' style={{ textDecoration: 'none', color: '#ff6a95' }}>
            <h2>{text}</h2>
          </Link>
        </div>
      </header>
    </>
  )
}

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.4)',
  txtColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
