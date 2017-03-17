import React from 'react';
import { Link } from 'react-router';

const NoteIndexItem = ({ note }) => {
  const snipit = note.body.slice(0, 125);

  const tools = (
    <nav className="note-index-tools">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      <i className="fa fa-trash" aria-hidden="true"></i>
    </nav>
  )

  return (
    <li className="note-index-item">
      { tools }
      <div className="note-index-text">
        <h5>{ note.title }</h5>
        <p>{ snipit }</p>
      </div>
    </li>
  );
};

export default NoteIndexItem;
