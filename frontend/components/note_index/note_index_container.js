import { connect } from 'react-redux';

import NoteIndex from './note_index.jsx';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  notes: state.notes,
  tagFilters: state.tagFilters
});

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
