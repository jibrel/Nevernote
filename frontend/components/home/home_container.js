import { connect } from 'react-redux';

import Home from './home.jsx';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
