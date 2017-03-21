import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import NoteDetail from '../note_detail/note_detail.jsx';
import { createNote } from '../../actions/notes_actions.js';

const mapStateToProps = (state) => ({
  currentNote: {},
  currentUser: state.currentUser,
  notebooks: state.notebooks,
  formType: 'new'
});

const mapDispatchToProps = (dispatch) => ({
  createNote: note => dispatch(createNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewNoteForm));
