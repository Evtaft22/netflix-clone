import React from 'react';
import '../styles/Nav.css';

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/124011999041155"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
