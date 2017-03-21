import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import TagIndex from './tag_index.jsx';
import { fetchAllTags, deleteTag } from '../../actions/tags_actions.js';

const mapStateToProps = (state, ownProps) => ({
  tags: state.tags,
  modalOpen: (ownProps.location.pathname === "/tags")
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTags: () => dispatch(fetchAllTags()),
  deleteTag: tagId => dispatch(deleteTag(tagId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TagIndex));
