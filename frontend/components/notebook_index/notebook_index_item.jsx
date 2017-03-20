import React from 'react';

const NotebookIndexItem = ({ notebook, count, deleteNotebook }) => {
  const handleDelete = () => deleteNotebook(notebook.id);

  const tools = (
    <nav className="notebook-index-tools">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      <i className="fa fa-trash" onClick={ handleDelete } aria-hidden="true"></i>
    </nav>
  )

  return (
    <li className="notebook-index-item">
      { tools }
      <div className="notebook-index-text">
        <h5>{ notebook.title }</h5>
        <p>{ count } notes</p>
      </div>
    </li>
  );
};

export default NotebookIndexItem;
