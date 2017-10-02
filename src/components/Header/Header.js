import React from 'react';
import './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="container">
          <Navigation />
          <Link styleName="brand" to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <span styleName="brandTxt">Your Company</span>
          </Link>
          <div styleName="banner">
            <h1 styleName="bannerTitle">React</h1>
            <p styleName="bannerDesc">Complex web apps made easy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
