import React from 'react';

import NoteIndexHeader from './note_index_header.jsx';
import NoteIndexItem from './note_index_item.jsx';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const path = this.props.location.pathname;
    if ((path !== "/notebooks") && (path !== "/tags")) {
      this.props.fetchAllNotes()
        .then(() => {
          let noteId = Object.keys(this.props.notes)[0];
          this.props.router.push(`/note/${noteId}`);
        });
    }
  }

  render() {
    const note_keys = Object.keys(this.props.notes);
    const note_items = note_keys.map(key => (
      <NoteIndexItem
        key={ key }
        note={ this.props.notes[key] }
        deleteNote={ this.props.deleteNote }
      />
    ));

    return (
      <div>
        <section className="note-index">
          <NoteIndexHeader count={ note_keys.length }/>
          <ul className="note-index-scroll">
            { note_items }
          </ul>
        </section>
      </div>
    );
  }
}

export default NoteIndex;
