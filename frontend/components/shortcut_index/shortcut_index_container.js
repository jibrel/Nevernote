import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ShortcutIndex from './shortcut_index.jsx';
import { deleteShortcut } from '../../actions/shortcuts_actions.js';

const mapStateToProps = (state, ownProps) => ({
  shortcuts: state.shortcuts,
  modalOpen: (ownProps.location.pathname === "/shortcuts")
});

const mapDispatchToProps = (dispatch) => ({
  deleteShortcut: shortcutId => dispatch(deleteShortcut(shortcutId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShortcutIndex));
