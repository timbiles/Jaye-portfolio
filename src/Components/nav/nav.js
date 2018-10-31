import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

class nav extends Component {
  state = {
    links: ['', 'About', 'Music', 'Events', 'Contact']
  };
  render() {
    const { pathname } = window.location;
    const linkMap = this.state.links.map((e, i) => {
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
      <div className="nav">
        <div className="link_holder">{linkMap}</div>
      </div>
    );
  }
}

export default nav;
