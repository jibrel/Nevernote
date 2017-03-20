import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import NotebookIndex from './notebook_index.jsx';
import { fetchAllNotebooks, deleteNotebook } from '../../actions/notebooks_actions.js';

const mapStateToProps = (state) = ({
  currentUser: state.currentUser,
  notebooks: state.notebooks,
  notes: state.notes
});

const mapDisaptchToProps = (dispatch) => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NotebookIndex));
