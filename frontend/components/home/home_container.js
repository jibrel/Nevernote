import { connect } from 'react-redux';

import Home from './home.jsx';

const mapStateToProps = (state) => ({
  currentUser: state.current_user
});

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(mapStateToProps, null)(Home);
