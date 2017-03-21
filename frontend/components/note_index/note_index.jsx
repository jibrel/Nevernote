import React from 'react';

import NoteIndexHeader from './note_index_header.jsx';
import NoteIndexItem from './note_index_item.jsx';

import noteSelector from '../selectors.js';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const path = this.props.location.pathname;
    if (path.startsWith("/note/") || path === "/home") {
      this.props.fetchAllNotes()
        .then(() => {
          let noteId = Object.keys(this.props.notes)[0];
          this.props.router.push(`/note/${noteId}`);
        });
    }
  }

  render() {
    const notes = noteSelector(this.props.notes, this.props.location.pathname);
    const noteKeys = Object.keys(notes);
    const noteItems = noteKeys.map(key => (
      <NoteIndexItem
        key={ key }
        note={ notes[key] }
        deleteNote={ this.props.deleteNote }
      />
    ));

    return (
      <div>
        <section className="note-index">
          <NoteIndexHeader count={ noteKeys.length }/>
          <ul className="note-index-scroll">
            { noteItems }
          </ul>
        </section>
      </div>
    );
  }
}

export default NoteIndex;
