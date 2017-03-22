import React from 'react';

const NotebookSelector = ({ notebooks }) => {
  const notebookKeys = Object.keys(notebooks);

  const notebookItems = notebookKeys.map(notebookId => (
    <li className="notebook-selector-item">
      <p>{ notebooks[notebookId].title }</p>
    </li>
  ));

  return (
    <ul className="notebook-selector-scroll">
      { notebookItems }
    </ul>
  );
}

export default NotebookSelector;

// SHOULD HAVE HANDLER TO ADD NOTE TO NOTEBOOK
// AND RECIEVE MESSAGES
