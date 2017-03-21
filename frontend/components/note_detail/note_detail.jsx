import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';

import Toolbar from './toolbar.jsx';
import { styleMap, InlineStyleControls, BlockStyleControls } from './formatbar.jsx';
// import MessageBar from './message_bar.jsx';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      editorState: EditorState.createEmpty()
    }

    this.focus = () => this.refs.editor.focus();
    this.changeBody = editorState => this.setState({ editorState });

    this.logJson = this.logJson.bind(this);  // for creating seed data
    this.changeTitle = this.changeTitle.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.toggleBlockStyle = this.toggleBlockStyle.bind(this);
    this.onTab = this.onTab.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentNote.id !== nextProps.currentNote.id) {
      this.setEditorState(nextProps.currentNote);
    }
    if (this.props.params.noteId !== nextProps.params.noteId) {
      const rawContent = convertToRaw(this.state.editorState.getCurrentContent());
      const note = {
        id: this.props.params.noteId,
        title: this.state.title,
        body: JSON.stringify(rawContent)
      };
      this.props.updateNote(note)
        .then(this.setEditorState);
    }
  }

  setEditorState(note) {
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

  toggleInlineStyle() {
    (type) => {
      this.changeBody(RichUtils.toggleInlineStyle(this.state.editorState, type));
    }
  }

  toggleBlockStyle() {
    (type) => {
      this.changeBody(RichUtils.toggleBlockType(this.state.editorState, type));
    }
  }

  onTab(e) {
    const maxDepth = 4;
    this.changeBody(RichUtils.onTab(e, this.state.editorState, maxDepth));
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

        <nav className="format-bar">
          <InlineStyleControls
            editorState={ this.state.editorState }
            onToggle={ this.toggleInlineStyle }
          />

          <BlockStyleControls
            editorState={ this.state.editorState }
            onToggle={ this.toggleBlockStyle }
          />
        </nav>

        <div className="note-detail-text">
          <h2><input onChange={ this.changeTitle } type="text" value={ this.state.title } /></h2>

          <div onClick={ this.focus }>
            <Editor
              onChange={ this.changeBody }
              onTab={ this.onTab }
              handleKeyCommand={ this.handleKeyCommand }
              editorState={ this.state.editorState }
              customStyleMap={ styleMap }
              ref="editor"
            />
          </div>
        </div>

        { this.logJsonButton() } // temporary!
      </section>
    );
  }
}

export default NoteDetail;
