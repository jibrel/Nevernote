import { connect } from 'react-redux';

import NotebookSelector from './notebook_selector.jsx';
import { fetchAllNotebooks } from '../../actions/notebooks_actions.js';

const mapStateToProps = (state) => ({
  notebooks: state.notebooks
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  onChange: ownProps.onChange
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookSelector);
