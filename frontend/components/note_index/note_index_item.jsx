import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Editor, EditorState, ContentState, convertFromRaw, getPlainText } from 'draft-js';

const NoteIndexItem = ({ note, deleteNote }) => {
  const handleDelete = () => deleteNote(note.id);

  const content = convertFromRaw(JSON.parse(note.body));
  const snipit = content.getPlainText().slice(0, 125).concat("...");

  const tools = (
    <nav className="note-index-tools">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      <i className="fa fa-trash" onClick={ handleDelete } aria-hidden="true"></i>
    </nav>
  )

  return (
    <li className="note-index-item">
      <Link to={ `/note/${note.id}` }>
        { tools }
        <div className="note-index-text">
          <h5>{ note.title }</h5>
          <p>{ snipit }</p>
        </div>
      </Link>
    </li>
  );
};

export default NoteIndexItem;
