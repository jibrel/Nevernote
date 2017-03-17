import { connect } from 'react-redux';

import NoteDetail from './note_detail.jsx';
// import { functions I need!! }

const mapStateToProps = (state, ownProps) => ({
  noteId: ownProps.noteId,
  notebooks: state.notebooks
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
