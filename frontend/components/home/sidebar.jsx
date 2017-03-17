import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="sidebar">
        <nav>
          <div className="nav-circle"><i className="fa fa-plus" aria-hidden="true"></i></div>
          <div className="nav-circle"><i className="fa fa-search" aria-hidden="true"></i></div>
        </nav>

        <nav className="green-nav">
          <div className="nav-circle-2"><i className="fa fa-star" aria-hidden="true"></i></div>
          <div className="nav-circle-2"><i className="fa fa-file-text" aria-hidden="true"></i></div>
          <div className="nav-circle-2"><i className="fa fa-book" aria-hidden="true"></i></div>
          <div className="nav-circle-2"><i className="fa fa-tag" aria-hidden="true"></i></div>
        </nav>
        <div className="account-square">
          <div className="account-button"></div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
