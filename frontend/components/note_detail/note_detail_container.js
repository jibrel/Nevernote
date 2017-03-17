import { connect } from 'react-redux';

import NoteDetail from './note_detail.jsx';
import { fetchNote, updateNote, deleteNote } from '../../actions/notes_actions.js';

const mapStateToProps = (state) => ({
  currentNote: state.currentNote,
  notebooks: state.notebooks
});

const mapDispatchToProps = (dispatch) => ({
  fetchNote: noteId => dispatch(fetchNote(noteId)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
