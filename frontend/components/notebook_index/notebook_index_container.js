import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import NotebookIndex from './notebook_index.jsx';
import { deleteNotebook } from '../../actions/notebooks_actions.js';

const mapStateToProps = (state, ownProps) => ({
  notebooks: state.notebooks,
  notes: state.notes,
  modalOpen: (ownProps.location.pathname === "/notebooks")
});

const mapDispatchToProps = (dispatch) => ({
  deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NotebookIndex));
