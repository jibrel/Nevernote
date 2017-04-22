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

  closeModal() {
    this.props.router.push("/home");
  }

  render() {
    const tags = this.props.tags;
    const tagKeys = Object.keys(tags);
    // count notes per tag?

    const tagItems = tagKeys.map(tagId => (
      <TagIndexItem
        key={ tagId }
        tag={ this.props.tags[tagId] }
        createShortcut={ this.props.createShortcut }
        receiveErrors={ this.props.receiveErrors }
        deleteTag={ this.props.deleteTag }
        router={ this.props.router }
      />
    ));

    return (
      <Modal
        isOpen={ this.props.modalOpen }
        onRequestClose={ this.closeModal }
        contentLabel="tag-index"
        style={ modalStyle }>

        <TagIndexHeader router={ this.props.router } />

        <ul className="tag-index-scroll">
          { tagItems }
        </ul>
      </Modal>
    );
  }
}

export default TagIndex;
