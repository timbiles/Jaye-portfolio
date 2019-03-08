import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <>
      <h1 className="nav_title">Jaye Biles</h1>
      <div className="nav">
        {nav ? (
          <>{linkMap}</>
        ) : (
          <>
            <div className="link_holder">{linkMap}</div>
            <span />
            <img
              onClick={() => setNav(true)}
              className="hidden_nav"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ic_menu_48px.svg/1024px-Ic_menu_48px.svg.png"
              alt=""
            />
          </>
        )}
      </div>
    </>
  );
};

export default nav;
