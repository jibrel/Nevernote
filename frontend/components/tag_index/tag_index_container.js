import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import TagIndex from './tag_index.jsx';
import { deleteTag } from '../../actions/tags_actions.js';
import { createShortcut } from '../../actions/shortcuts_actions.js';
import { receiveErrors } from '../../actions/errors_actions.js';

const mapStateToProps = (state, ownProps) => ({
  tags: state.tags,
  modalOpen: (ownProps.location.pathname === "/tags")
});

const mapDispatchToProps = (dispatch) => ({
  deleteTag: tagId => dispatch(deleteTag(tagId)),
  createShortcut: shortcut => dispatch(createShortcut(shortcut)),
  receiveErrors: (errors, name) => dispatch(receiveErrors(errors, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TagIndex));
