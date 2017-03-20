import React from 'react';

const NoteIndexHeader = ({ count }) => (
  <div className="note-index-header">
    <h3>NOTES</h3>
    <p>{ count } notes</p>
  </div>
);

export default NoteIndexHeader;
