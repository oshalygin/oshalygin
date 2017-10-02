import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div styleName="root">
        <div styleName="container">
          <h1>{this.props.title}</h1>
          <p styleName="lead">
            Log in with your username or company email address.
          </p>
          <div styleName="formGroup">
            <a styleName="facebook" href="/login/facebook">
              <svg
                styleName="icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z" />
              </svg>
              <span>Log in with Facebook</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
