import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import NoteIndex from './note_index.jsx';
import { fetchAllNotes, deleteNote } from '../../actions/notes_actions.js';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  notes: state.notes,
  notebooks: state.notebooks,
  tags: state.tags
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  deleteNote: noteId => dispatch(deleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NoteIndex));
