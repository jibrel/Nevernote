import React from 'react';

const NoteIndexHeader = (props) => (
  <div className="note-index-header">
    <h3>NOTES</h3>
    <p>{ props.count } notes</p>
  </div>
)

export default NoteIndexHeader;
