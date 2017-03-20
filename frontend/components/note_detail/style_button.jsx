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
      <span onMouseDown={ this.onToggle }>
        <i className={ className } aria-hidden="true"></i>
      </span>
    )
  }
}

export default StyleButton;
