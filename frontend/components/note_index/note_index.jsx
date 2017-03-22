import React from 'react';

import NoteIndexHeader from './note_index_header.jsx';
import NoteIndexItem from './note_index_item.jsx';

import noteSelector from '../selectors.js';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.showFirstNote = this.showFirstNote.bind(this);
  }

  componentDidMount() {
    const path = this.props.location.pathname;
    if (path.startsWith("/note/") || path === "/home") {
      this.props.fetchAllNotes()
        .then(() => this.showFirstNote(path));
    }
  }

  componentWillReceiveProps(nextProps) {
    const path = this.props.location.pathname;
    if (path.startsWith("/notebook/") || path.startsWith("/tag/")) {
      console.log("About to show first note");
      if (!this.props.params.noteId) {
        this.showFirstNote(path);
      }
    }
  }

  showFirstNote(path) {
    const notes = noteSelector(this.props.notes, path);
    const noteId = Object.keys(notes)[0];
    const newPath = this.getNewPath(path, noteId);

    if (noteId) {
      this.props.router.push(newPath);
    }
  }

  getNewPath(path, noteId) {
    let newPath = `/note/${noteId}`;
    if (path.startsWith("/notebook") || path.startsWith("/tag")) {
      newPath = path + newPath;
    }
    return newPath;
  }

  render() {
    const notes = noteSelector(this.props.notes, this.props.location.pathname);
    const noteKeys = Object.keys(notes);
    const noteItems = noteKeys.map(key => (
      <NoteIndexItem
        key={ key }
        note={ notes[key] }
        deleteNote={ this.props.deleteNote }
        path={ this.props.location.pathname }
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
