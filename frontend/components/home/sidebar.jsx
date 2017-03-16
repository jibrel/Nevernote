import React from 'react';

const Sidebar = (props) => (
  <aside className="sidebar">
    <nav>
      <div className="nav-circle"><i className="fa fa-plus" aria-hidden="true"></i></div>
      <div className="nav-circle"><i className="fa fa-search" aria-hidden="true"></i></div>
    </nav>

    <nav>
      <div className="nav-circle-2"><i className="fa fa-star" aria-hidden="true"></i></div>
      <div className="nav-circle-2"><i className="fa fa-file-text" aria-hidden="true"></i></div>
      <div className="nav-circle-2"><i className="fa fa-book" aria-hidden="true"></i></div>
      <div className="nav-circle-2"><i className="fa fa-tag" aria-hidden="true"></i></div>
    </nav>
    <button></button>
  </aside>
)

export default Sidebar;
