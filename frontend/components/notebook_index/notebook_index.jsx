import React from 'react';

import NotebookIndexHeader from './notebook_index_header.jsx';
import NotebookIndexItem from './notebook_index_item.jsx';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  render() {
    const note_keys = Object.keys(this.props.notes);
    const notebook_keys = Object.keys(this.props.notebooks);

    const notebook_items = notebook_keys.map(notebookId => {
      let count = 0;
      note_keys.forEach(noteId => {
        if (this.props.notes[noteId][notebook_id] === notebookId) {
          count++;
        }
      });

      return (
        <NotebookIndexItem
          key={ key }
          notebook={ this.props.notebooks[key] }
          count={ count }
          deleteNotebook={ this.props.deleteNotebook }
        />
      );
    });

    return (
      <section className="notebook-index">
        <NotebookIndexHeader router={ this.props.router }/>
        <ul className="notebook-index-scroll">
          { notebook_items }
        </ul>
      </section>
    )
  }
}

export default NotebookIndex;
