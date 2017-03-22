import React from 'react';

class NotebookSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  render() {
    const notebooks = this.props.notebooks;
    const notebookKeys = Object.keys(notebooks);

    const notebookItems = notebookKeys.map(notebookId => (
      <li className="notebook-selector-item" onClick={ this.props.onChange(notebookId) } key={ notebookId }>
        <div className="notebook-selector-text">
          <p>{ notebooks[notebookId].title }</p>
        </div>
      </li>
    ));

    return (
      <ul className="notebook-selector-scroll">
        <li className="notebook-selector-header">
          <div className="notebook-header-text">
            <p>NOTEBOOKS</p>
          </div>
        </li>

        { notebookItems }
      </ul>
    );
  }
}

export default NotebookSelector;
