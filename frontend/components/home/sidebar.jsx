import React from 'react';

const Sidebar = ({ logout, router }) => {
  const newNote = (e) => {
    e.preventDefault();
    router.push("/new-note");
  }

  const seeNotes = (e) => {
    e.preventDefault();
    router.push("/home");
  }

  const seeNotebooks = (e) => {
    e.preventDefault();
    router.push("/home/notebooks");
  }

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setTimeout(() => router.push("/login"), 1000);
  }

  return (
    <aside className="sidebar">
      <nav>
        <div className="nav-circle" onClick={ newNote }><i className="fa fa-plus" aria-hidden="true"></i></div>
        <div className="nav-circle"><i className="fa fa-search" aria-hidden="true"></i></div>
      </nav>

      <nav className="green-nav">
        <div className="nav-circle-2"><i className="fa fa-star" aria-hidden="true"></i></div>
        <div className="nav-circle-2" onClick={ seeNotes }><i className="fa fa-file-text" aria-hidden="true"></i></div>
        <div className="nav-circle-2" onClick={ seeNotebooks }><i className="fa fa-book" aria-hidden="true"></i></div>
        <div className="nav-circle-2"><i className="fa fa-tag" aria-hidden="true"></i></div>
      </nav>
      <div className="account-square">
        <div className="account-button" onClick={ handleLogout }></div>
      </div>
    </aside>
  );
}

export default Sidebar;
