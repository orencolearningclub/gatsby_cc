import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = () => (
  <div
    style={{
      background: '#f4f4f4',
      paddingTop: '10px',
      textDecoration: 'none'
    }}
  >
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

  </div>
)

export default Menu
