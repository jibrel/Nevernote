import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

import Toolbar from './toolbar.jsx';
// import Formatbar from './formatbar.jsx';
// import MessageBar from './message_bar.jsx';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty() // how to start not empty?
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchNote(this.props.params.noteId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.noteId !== nextProps.params.noteId) {
      this.props.fetchNote(nextProps.params.noteId);
    }
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    const note = this.props.currentNote; // change !!

    return (
      <section className="note-detail-section">
        <Toolbar />
        <div className="note-detail-text">
          <h2>{ note.title }</h2>
          <p>{ note.body }</p>
        </div>
      </section>
    );
  }
}

export default NoteDetail;
