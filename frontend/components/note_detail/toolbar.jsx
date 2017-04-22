import React from 'react';

const Toolbar = ({ noteId, createShortcut, deleteNote, router }) => {
  const handleShortcut = (e) => {
    e.target.classList.add(" green");
    createShortcut();
  }

  const handleDelete = () => {
    deleteNote(noteId);
  };

  return (
    <nav className="toolbar">
      <i className="fa fa-star-o" onClick={ handleShortcut } aria-hidden="true"></i>
      <i className="fa fa-trash" onClick={ handleDelete } aria-hidden="true"></i>
    </nav>
  );
}

export default Toolbar;
