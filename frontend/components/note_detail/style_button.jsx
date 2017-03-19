import React from 'react';

class StyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  }

  render() {
    let className = `style-button ${this.props.class}`;
    if (this.props.active) {
      className += "active-button";
    }

    return (
      <i className={ className } onClick={ this.onToggle } aria-hidden="true"></i>
    )
  }
}

export default StyleButton;
