import React from 'react';
import './feedback.css';

class Feedback extends React.Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="container">
          <a
            styleName="link"
            href="https://gitter.im/kriasoft/react-starter-kit"
          >
            Ask a question
          </a>
          <span styleName="spacer">|</span>
          <a
            styleName="link"
            href="https://github.com/kriasoft/react-starter-kit/issues/new"
          >
            Report an issue
          </a>
        </div>
      </div>
    );
  }
}

export default Feedback;
