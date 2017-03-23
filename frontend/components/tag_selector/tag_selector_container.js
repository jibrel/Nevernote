import { connect } from 'react-redux';

import TagSelector from './tag_selector.jsx';
import { fetchAllTags } from '../../actions/tags_actions.js';

const mapStateToProps = (state) => ({
  tags: state.tags
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllTags: () => dispatch(fetchAllTags()),
  onChange: ownProps.onChange,
  currentTags: ownProps.currentTags
});

export default connect(mapStateToProps, mapDispatchToProps)(TagSelector);
