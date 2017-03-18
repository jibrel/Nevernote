import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';

import Toolbar from './toolbar.jsx';
// import Formatbar from './formatbar.jsx';
// import MessageBar from './message_bar.jsx';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      editorState: EditorState.createEmpty()
    };
    // this.saveToDb = this.saveToDb.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentDidMount() {
    this.props.fetchNote(this.props.params.noteId)
      .then(({ note }) => this.setState({ title: note.title }));
  //     .then(({ note }) => {
  //       const contentState = convertFromRaw(JSON.parse(note.body));
  //       this.setState({
  //         title: note.title,
  //         editorState: EditorState.createWithContent(contentState)
  //       });
  //     });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.noteId !== nextProps.params.noteId) {
      this.props.fetchNote(nextProps.params.noteId);
    }
  }

  // saveToDb() {
  //   this.props.updateNote()
  // }

  changeTitle(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.changeBody(newState);
      return "handled";
    }
    else {
      return "not-handled";
    }
  }

  render() {
    return (
      <section className="note-detail-section">
        <Toolbar noteId={ this.props.params.noteId } deleteNote={ this.props.deleteNote }/>
        <div className="note-detail-text">
          <h2><input onChange={ this.changeTitle } type="text" value={ this.props.currentNote.title } /></h2>
          <Editor onChange={ this.changeBody } handleKeyCommand={ this.handleKeyCommand } editorState={ this.state.editorState } />
        </div>
      </section>
    );
  }
}

export default NoteDetail;
