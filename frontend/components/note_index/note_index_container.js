import { connect } from 'react-redux';

import NoteIndex from './note_index.jsx';
import { fetchAllNotes, deleteNote } from '../../actions/notes_actions.js';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  notes: state.notes,
  tagFilters: state.tagFilters
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  deleteNote: noteId => dispatch(deleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
