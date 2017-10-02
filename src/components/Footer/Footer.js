import React from 'react';
import './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="container">
          <span styleName="text">© Your Company</span>
          <span styleName="spacer">·</span>
          <Link styleName="link" to="/">
            Home
          </Link>
          <span styleName="spacer">·</span>
          <Link styleName="link" to="/admin">
            Admin
          </Link>
          <span styleName="spacer">·</span>
          <Link styleName="link" to="/privacy">
            Privacy
          </Link>
          <span styleName="spacer">·</span>
          <Link styleName="link" to="/not-found">
            Not Found
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
