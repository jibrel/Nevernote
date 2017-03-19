import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';

import Toolbar from './toolbar.jsx';
// import MessageBar from './message_bar.jsx';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      editorState: EditorState.createEmpty()
    }
    this.setEditorState();

    this.logJson = this.logJson.bind(this);  // for creating seed data
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = editorState => this.setState({ editorState });
    this.handleInlineStyle = this.handleInlineStyle.bind(this);
    this.handleBlockStyle = this.handleBlockStyle.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentWillReceiveProps() {
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());
    const note = {
      id: this.props.params.noteId,
      title: this.state.title,
      body: JSON.stringify(rawContent)
    };
    this.props.updateNote(note)
      .then(this.setEditorState())
  }

  setEditorState() {
    const note = this.props.currentNote;
    if (note && note.title) {
      this.setState({ title: note.title });
    }
    if (note && note.body) {
      const content = convertFromRaw(JSON.parse(note.body));
      this.setState({ editorState: EditorState.createWithContent(content) });
    }
  }

  // for creating seed data
  logJson() {
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());
    const json = JSON.stringify(rawContent);
    console.log(json);
  }

  // for creating seed data
  logJsonButton() {
    return (
      <input onClick={ this.logJson } type="button" value="Log JSON" />
    );
  }

  changeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleInlineStyle(type) {
    () => {
      this.changeBody(RichUtils.toggleInlineStyle(this.state.editorState, type));
    }
  }

  handleBlockStyle(type) {
    () => {
      this.changeBody(RichUtils.toggleBlockType(this.state.editorState, type));
    }
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

  renderFormatbar() {
    return (
      <nav className="format-bar">
        <div>
          <i className="fa fa-bold" onClick={ this.handleInlineStyle('BOLD') } aria-hidden="true"></i>
          <i className="fa fa-italic" onClick={ this.handleInlineStyle('ITALIC') } aria-hidden="true"></i>
          <i className="fa fa-underline" onClick={ this.handleInlineStyle('UNDERLINE') } aria-hidden="true"></i>
          <i className="fa fa-strikethrough" aria-hidden="true"></i>
          <i className="fa fa-code" onClick={ this.handleBlockStyle('code-block') } aria-hidden="true"></i>
        </div>

        <div>
          <i className="fa fa-check-square-o" aria-hidden="true"></i>
          <i className="fa fa-list-ul" onClick={ this.handleBlockStyle('unordered-list-item') } aria-hidden="true"></i>
          <i className="fa fa-list-ol" onClick={ this.handleBlockStyle('ordered-list-item') } aria-hidden="true"></i>
        </div>
      </nav>
    );
  };

  render() {
    return (
      <section className="note-detail-section">
        <Toolbar noteId={ this.props.params.noteId } deleteNote={ this.props.deleteNote }/>
        { this.renderFormatbar() }
        <div className="note-detail-text">
          <h2><input onChange={ this.changeTitle } type="text" value={ this.state.title } /></h2>
          <Editor onChange={ this.changeBody } handleKeyCommand={ this.handleKeyCommand } editorState={ this.state.editorState } />
        </div>
        { this.logJsonButton() } // temporary!
      </section>
    );
  }
}

export default NoteDetail;
