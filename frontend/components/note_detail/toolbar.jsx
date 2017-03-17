import React from 'react';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="toolbar">
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </nav>
    )
  }
}

export default Toolbar;
