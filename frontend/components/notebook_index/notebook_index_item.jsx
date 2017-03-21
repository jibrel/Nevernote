import React from 'react';
import { Link } from 'react-router';

const NotebookIndexItem = ({ notebook, count, deleteNotebook }) => {
  const handleDelete = () => deleteNotebook(notebook.id);

  const tools = (
    <nav className="notebook-index-tools">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      <i className="fa fa-trash" onClick={ handleDelete } aria-hidden="true"></i>
    </nav>
  );

  return (
    <li className="notebook-index-item">
      <Link to={ `/notebook/${notebook.id}` }>
        { tools }
        <div className="notebook-index-text">
          <h5>{ notebook.title }</h5>
          <p>{ count } notes</p>
        </div>
      </Link>
    </li>
  );
};

export default NotebookIndexItem;
