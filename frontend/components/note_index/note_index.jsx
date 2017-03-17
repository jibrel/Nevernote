import React from 'react';

import NoteIndexHeader from './note_index_header.jsx';
import NoteIndexItem from './note_index_item.jsx';

class NoteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render() {
    const note_keys = Object.keys(this.props.notes);
    const note_items = note_keys.map(key => <NoteIndexItem key={ key } note={ this.props.notes[key] } />)

    return (
      <section className="note-index">
        <NoteIndexHeader />
        <ul className="note-index-scroll">
          { note_items }
        </ul>
      </section>
    );
  }
}

export default NoteIndex;
