import React from 'react';
import cx from 'classnames';
import './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div styleName="root" role="navigation">
        <Link styleName="link" to="/about">
          About
        </Link>
        <Link styleName="link" to="/contact">
          Contact
        </Link>
        <span styleName="spacer"> | </span>
        <Link styleName="link" to="/login">
          Log in
        </Link>
        <span styleName="spacer">or</span>
        <Link styleName="link highlight" to="/register">
          Sign up
        </Link>
      </div>
    );
  }
}

export default Navigation;
