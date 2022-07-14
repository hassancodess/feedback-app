import React from 'react'
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
          <h2>{text}</h2>
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
