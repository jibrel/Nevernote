import React from 'react';
const Modal = require('react-modal');

import ShortcutIndexHeader from './shortcut_index_header.jsx';
import ShortcutIndexItem from './shortcut_index_item.jsx';
import { modalStyle } from '../notebook_index/modal_style.jsx';

class ShortcutIndex extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.router.push("/home");
  }

  render() {
    const shortcuts = this.props.shortcuts;
    const shortcutKeys = Object.keys(shortcuts);

    const shortcutItems = shortcutKeys.map(shortcutId => (
      <ShortcutIndexItem
        key={ shortcutId }
        shortcut={ this.props.shortcuts[shortcutId] }
        deleteShortcut={ this.props.deleteShortcut }
        router={ this.props.router }
      />
    ));

    return (
      <Modal
        isOpen={ this.props.modalOpen }
        onRequestClose={ this.closeModal }
        contentLabel="shortcut-index"
        style={ modalStyle }>

        <ShortcutIndexHeader />

        <ul className="shortcut-index-scroll">
          { shortcutItems }
        </ul>
      </Modal>
    );
  }
}

export default ShortcutIndex;
