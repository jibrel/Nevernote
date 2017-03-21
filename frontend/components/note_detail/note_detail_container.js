import { connect } from 'react-redux';

import NoteDetail from './note_detail.jsx';
import { fetchNote, updateNote, deleteNote } from '../../actions/notes_actions.js';

const mapStateToProps = (state, ownProps) => ({
  currentNote: state.notes[ownProps.params.noteId] || { id: 0, title: "", body: ""},
  notebooks: state.notebooks
});

const mapDispatchToProps = (dispatch) => ({
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
