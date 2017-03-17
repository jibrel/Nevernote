import React from 'react';

import Toolbar from './toolbar.jsx';
// import Formatbar from './formatbar.jsx';
// import MessageBar from './message_bar.jsx';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   // fetchNote(this.props.noteId) ?? where will it be stored?
  // }

  render() {
    return (
      <section className="note-detail-section">
        <Toolbar />

        <div className="note-detail-text">
          <h2>This is a title</h2>
          <p>This is the body</p>
        </div>
      </section>
    );
  }
}

export default NoteDetail;
