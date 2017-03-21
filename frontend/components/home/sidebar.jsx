import React from 'react';

const Sidebar = ({ logout, router }) => {
  const redirect = (path) => (e) => {
    e.preventDefault();
    router.push(path);
  }

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setTimeout(() => router.push("/login"), 1000);
  }

  return (
    <aside className="sidebar">
      <nav>
        <div className="nav-circle" onClick={ redirect("/new-note") }><i className="fa fa-plus" aria-hidden="true"></i></div>
        <div className="nav-circle"><i className="fa fa-search" aria-hidden="true"></i></div>
      </nav>

      <nav className="green-nav">
        <div className="nav-circle-2"><i className="fa fa-star" aria-hidden="true"></i></div>
        <div className="nav-circle-2" onClick={ redirect("/home") }><i className="fa fa-file-text" aria-hidden="true"></i></div>
        <div className="nav-circle-2" onClick={ redirect("/notebooks") }><i className="fa fa-book" aria-hidden="true"></i></div>
        <div className="nav-circle-2" onClick={ redirect("/tags") }><i className="fa fa-tag" aria-hidden="true"></i></div>
      </nav>
      <div className="account-square">
        <div className="account-button" onClick={ handleLogout }></div>
      </div>
    </aside>
  );
}

export default Sidebar;
