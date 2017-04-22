import React from 'react';
const Modal = require('react-modal');

import NotebookIndexHeader from './notebook_index_header.jsx';
import NotebookIndexItem from './notebook_index_item.jsx';
import { modalStyle } from './modal_style.jsx';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.router.push("/home");
  }

  render() {
    const noteKeys = Object.keys(this.props.notes);
    const notebookKeys = Object.keys(this.props.notebooks);

    const notebookItems = notebookKeys.map(notebookId => {
      let count = 0;
      noteKeys.forEach(noteId => {
        if (this.props.notes[noteId].notebook_id == notebookId) {
          count++;
        }
      });

      return (
        <NotebookIndexItem
          key={ notebookId }
          notebook={ this.props.notebooks[notebookId] }
          count={ count }
          createShortcut={ this.props.createShortcut }
          receiveErrors={ this.props.receiveErrors }
          deleteNotebook={ this.props.deleteNotebook }
          router={ this.props.router }
        />
      );
    });

    return (
      <Modal
        isOpen={ this.props.modalOpen }
        onRequestClose={ this.closeModal }
        contentLabel="notebook-index"
        style={ modalStyle }>

        <NotebookIndexHeader router={ this.props.router }/>

        <ul className="notebook-index-scroll">
          { notebookItems }
        </ul>
      </Modal>
    );
  }
}

export default NotebookIndex;
