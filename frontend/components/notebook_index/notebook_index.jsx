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

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  closeModal() {
    this.props.router.push("/home");
  }

  render() {
    const note_keys = Object.keys(this.props.notes);
    const notebook_keys = Object.keys(this.props.notebooks);

    const notebook_items = notebook_keys.map(notebookId => {
      let count = 0;
      note_keys.forEach(noteId => {
        if (this.props.notes[noteId].notebook_id == notebookId) {
          count++;
        }
      });

      return (
        <NotebookIndexItem
          key={ notebookId }
          notebook={ this.props.notebooks[notebookId] }
          count={ count }
          deleteNotebook={ this.props.deleteNotebook }
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
          { notebook_items }
        </ul>
      </Modal>
    );
  }
}

export default NotebookIndex;
