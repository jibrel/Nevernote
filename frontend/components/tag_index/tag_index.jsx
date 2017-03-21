import React from 'react';
const Modal = require('react-modal');

import TagIndexHeader from './tag_index_header.jsx';
import TagIndexItem from './tag_index_item.jsx';
import { modalStyle } from '../notebook_index/modal_style.jsx';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  closeModal() {
    this.props.router.push("/home");
  }

  render() {
    const tag_keys = Object.keys(this.props.tags);
    // count notes per tag?

    const tag_items = tag_keys.map(tagId => (
      <TagIndexItem
        key={ tagId }
        tag={ this.props.tags[tagId] }
        deleteTag={ this.props.deleteTag }
      />
    ));

    return (
      <Modal
        isOpen={ this.props.modalOpen }
        onRequestClose={ this.closeModal }
        contentLabel="tag-index"
        style={ modalStyle }>

        <TagIndexHeader router={ this.props.router }/>

        <ul className="tag-index-scroll">
          { tag_items }
        </ul>
      </Modal>
    );
  }
}

export default TagIndex;
