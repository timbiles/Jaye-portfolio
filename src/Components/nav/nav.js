import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const links = ['', 'About', 'Music', 'Events', 'Contact']

const nav = () => {

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
      <h1 className='nav_title'>Jaye Biles</h1>
      <div className="nav">
        <div className="link_holder">{linkMap}</div>
        <span />
      </div>
      </>
    );
  }

export default nav;
