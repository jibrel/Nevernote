import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import NotebookIndex from './notebook_index.jsx';
import { deleteNotebook } from '../../actions/notebooks_actions.js';
import { createShortcut } from '../../actions/shortcuts_actions.js';
import { receiveErrors } from '../../actions/errors_actions.js';

const mapStateToProps = (state, ownProps) => ({
  notebooks: state.notebooks,
  notes: state.notes,
  modalOpen: (ownProps.location.pathname === "/notebooks")
});

const mapDispatchToProps = (dispatch) => ({
  deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
  createShortcut: shortcut => dispatch(createShortcut(shortcut)),
  receiveErrors: (errors, name) => dispatch(receiveErrors(errors, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NotebookIndex));
