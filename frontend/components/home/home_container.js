import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Home from './home.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state) => ({
  currentUser: state.current_user
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
