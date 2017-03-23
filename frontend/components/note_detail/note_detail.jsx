import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';

import Toolbar from './toolbar.jsx';
import { styleMap, blockStyleFn, InlineStyleControls, BlockStyleControls } from './formatbar.jsx';
import NotebookSelectorContainer from '../notebook_selector/notebook_selector_container.js';
import TagSelectorContainer from '../tag_selector/tag_selector_container.js';
import MessageBarContainer from '../message_bar/message_bar_container.js';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      editorState: EditorState.createEmpty(),
      notebookId: null,
      tags: [],
      notebookSelectorOpen: false,
      tagSelectorOpen: false
    }
    this.saveNote = this.saveNote.bind(this);

    this.logJson = this.logJson.bind(this);  // for creating seed data

    this.changeBody = editorState => this.setState({ editorState });
    this.changeTitle = this.changeTitle.bind(this);
    this.changeNotebook = this.changeNotebook.bind(this);
    this.changeTags = this.changeTags.bind(this);

    this.focus = () => this.refs.editor.focus();
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.toggleBlockStyle = this.toggleBlockStyle.bind(this);
    this.onTab = this.onTab.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggleSelector = this.toggleSelector.bind(this);
    this.renderNotebookSelector = this.renderNotebookSelector.bind(this);
    this.renderTagSelector = this.renderTagSelector.bind(this);
  }

  componentDidMount() {
    this.setEditorState(this.props.currentNote);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.formType === "edit") {
      if (this.props.currentNote.id !== nextProps.currentNote.id) {
        this.setEditorState(nextProps.currentNote);
      }
      if (this.props.params.noteId !== nextProps.params.noteId) {
        this.saveNote();
      }
    }
  }

  componentWillUnmount() {
    this.saveNote();
  }

  setEditorState(note) {
    if (note && note.title) {
      this.setState({ title: note.title });
    }
    if (note && note.body) {
      const content = convertFromRaw(JSON.parse(note.body));
      this.setState({ editorState: EditorState.createWithContent(content) });
    }
    if (note && note.notebook_id) {
      this.setState({ notebookId: note.notebook_id });
    }
    if (note && note.tags) {
      this.setState({ tags: note.tags }); // this may be wrong!!!
    }
  }

  saveNote() {
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());
    const note = {
      id: this.props.params.noteId,
      title: this.state.title,
      body: JSON.stringify(rawContent),
      notebook_id: this.state.notebookId,
      tags: this.state.tags
    };
    this.props.updateNote(note)
      .then(updatedNote => this.setEditorState(updatedNote));
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

  changeNotebook(value) {
    return (e) => (
      this.setState({
        notebookId: parseInt(value),
        notebookSelectorOpen: false
      }, () => {
        const note = {
          id: this.props.params.noteId,
          notebook_id: this.state.notebookId
        };
        if (this.props.formType === "edit") { // does not display notebook before note created!
          this.props.updateNote(note);
        }
      })
    );
  }

  changeTags(tagIds) {
    return (e) => (
      this.setState({
        tags: tagIds
      }, () => {
        const note = {
          id: this.props.params.noteId,
          tags: this.state.tags
        };
        if (this.props.formType === "edit") {
          this.props.updateNote(note);
        }
      })
    )
  }

  toggleInlineStyle(type) {
    this.changeBody(RichUtils.toggleInlineStyle(this.state.editorState, type));
  }

  toggleBlockStyle(type) {
    this.changeBody(RichUtils.toggleBlockType(this.state.editorState, type));
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

  handleCancel() {
    this.props.router.push("/home");
  }

  handleSubmit(e) {
    e.preventDefault();
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());
    const note = {
      title: this.state.title,
      body: JSON.stringify(rawContent),
      author_id: this.props.currentUser.id,
      notebook_id: this.state.notebookId,
      tags: this.state.tags
    };
    this.props.createNote({ note })
      .then(() => this.props.router.push("/home"));
  }

  toggleSelector(selector) {
    if (this.state[selector]) {
      this.setState({ [selector]: false });
    }
    else {
      this.setState({ [selector]: true });
    }
  }

  renderNotebookSelector() {
    if (this.state.notebookSelectorOpen) {
      return (
        <NotebookSelectorContainer onChange={ this.changeNotebook } currentNotebook={ this.state.notebookId } />
      );
    }
  }

  renderTagSelector() {
    if (this.state.tagSelectorOpen) {
      return (
        <TagSelectorContainer onChange={ this.changeTags } currentTags={ this.state.tags } />
      );
    }
  }

  renderButtons(formType) {
    if (formType === "new") {
      return (
        <div className="new-note-buttons">
          <button className="cancel-note" onClick={ this.handleCancel }>Cancel</button>
          <button className="submit-note" onClick={ this.handleSubmit }>Done</button>
        </div>
      );
    }
  }

  render() {
    const formType = this.props.formType;
    const onDelete = (formType === "new") ? this.handleCancel : this.props.deleteNote;

    return (
      <section className={ `note-detail-section ${formType}` }>
        <Toolbar
          noteId={ this.props.params.noteId }
          deleteNote={ onDelete }
        />

        { this.renderButtons(formType) }

        <nav className="format-bar">
          <button className="notebook-selector-button" onClick={ this.toggleSelector("notebookSelectorOpen") }>
            <i className="fa fa-book" aria-hidden="true"></i>
            <p>{ this.props.notebookTitle }</p>
          </button>

          { this.renderNotebookSelector() }

          <div className="style-controls"><p></p></div>

          <button className="tag-selector-button" onClick={ this.toggleSelector("tagSelectorOpen") }>
            <i className="fa fa-tag" aria-hidden="true"></i>
          </button>

          { this.renderTagSelector() }

          <div className="style-controls"><p></p></div>

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
          <h2><input
            onChange={ this.changeTitle }
            type="text"
            value={ this.state.title }
            placeholder="Title your note">
          </input></h2>

          <div onClick={ this.focus }>
            <Editor
              onChange={ this.changeBody }
              onTab={ this.onTab }
              handleKeyCommand={ this.handleKeyCommand }
              editorState={ this.state.editorState }
              customStyleMap={ styleMap }
              blockStyleFn={ blockStyleFn }
              ref="editor"
            />
          </div>
        </div>

        { this.logJsonButton() }

        <MessageBarContainer />
      </section>
    );
  }
}

export default NoteDetail;
