import React from 'react';

const Toolbar = ({ noteId, deleteNote, router }) => {
  const handleDelete = () => {
    deleteNote(noteId);
  };

  return (
    <nav className="toolbar">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      <i className="fa fa-trash" onClick={ handleDelete } aria-hidden="true"></i>
    </nav>
  );
}

export default Toolbar;
