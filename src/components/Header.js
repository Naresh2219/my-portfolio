import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 0',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1000,
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  };

  const navItemStyle = {
    margin: '0 15px',
  };

  const navLinkStyle = {
    color: 'rgb(169, 208, 240)',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  };

  const navLinkHoverStyle = {
    color: '#1db954',
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <a
              href="#About"
              style={navLinkStyle}
              onMouseOver={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = navLinkStyle.color}
            >
              About
            </a>
          </li>
          <li style={navItemStyle}>
            <a
              href="#skills"
              style={navLinkStyle}
              onMouseOver={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = navLinkStyle.color}
            >
              Skills
            </a>
          </li>
          <li style={navItemStyle}>
            <a
              href="#projects"
              style={navLinkStyle}
              onMouseOver={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = navLinkStyle.color}
            >
              Projects
            </a>
          </li>
          <li style={navItemStyle}>
            <a
              href="#experience"
              style={navLinkStyle}
              onMouseOver={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = navLinkStyle.color}
            >
              Experience
            </a>
          </li>
          <li style={navItemStyle}>
            <a
              href="#contact"
              style={navLinkStyle}
              onMouseOver={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = navLinkStyle.color}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
