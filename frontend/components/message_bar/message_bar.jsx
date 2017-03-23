import React from 'react';

class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        shown: ((nextProps.errors.length > 0) || (nextProps.messages.length > 0))
      });
      setTimeout(() => this.setState({
        shown: false
      }), 3000);
    }
  }

  render() {
    if (this.state.shown) {
      const className = (this.props.errors.length > 0) ? "errors" : "messages";
      const text = (className === "errors") ? this.props.errors[0] : this.props.messages[0];

      return (
        <div className={ `message-bar ${className}` }>
          <p>{ text }</p>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default MessageBar;
