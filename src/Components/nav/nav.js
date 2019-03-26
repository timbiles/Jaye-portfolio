import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './nav.scss';

const links = ['', 'About', 'Music', 'Events', 'Contact'];

const nav = () => {
  const [nav, setNav] = useState(false);

  const { pathname } = window.location;
  const linkMap = links.map((e, i) => {
    return (
      <Link
        className={pathname === `/${e}` ? 'active_links' : 'links'}
        to={e ? `/${e}` : '/'}
        key={i}
      >
        {e || 'Home'}
      </Link>
    );
  });
  return (
    <Nav>
      {/* <h1 className="nav_title">Jaye Biles</h1> */}
      <div className="nav">
        {nav ? (
          <>{linkMap}</>
        ) : (
          <>
            <div className="link_holder">{linkMap}</div>
            {/* <span /> */}
            <img
              onClick={() => setNav(true)}
              className="hidden_nav"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ic_menu_48px.svg/1024px-Ic_menu_48px.svg.png"
              alt=""
            />
          </>
        )}
      </div>
    </Nav>
  );
};

export default nav;

const Nav = styled.div`
/* $primary-color: #56a082; */

.nav {
  display: flex;
  justify-content: center;
  height: 10vh;
  position: relative;

  span {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 75%;
    height: 1px;
    border-bottom: 1px solid #bdbdbd;

    @media (max-width: 700px) {
      display: none;
    }
  }
}

.nav_title {
  margin-top: 5vh;
  font-family: 'Montserrat', sans-serif;
}
.link_holder {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 9;
  position: relative;
  /* background: #fff; */
  background: rgba(255, 255, 255, 0)
}

.links {
  color: #000;
  text-decoration: none;
  font-size: 1em;
  letter-spacing: 1.5px;
}

.active_links {
  @extend .links;
  border-bottom: 1px solid #56a082;
  border-top: 1px solid #56a082;
}

.links:hover,
.ma_nav p:hover {
  color: #56a082;
}

button {
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
}

.body {
  border: 1px solid #000;
}

.hidden_nav {
  display: none;
  width: 50px;
  height: 50px;
}

@media (max-width: 700px) {
  .link_holder {
    display: none;
  }
  .hidden_nav {
    display: block;
  }
}
`