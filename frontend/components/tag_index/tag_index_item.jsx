import React from 'react';
import { Link } from 'react-router';

const TagIndexItem = ({ tag, deleteTag }) => {
  const handleDelete = () => deleteTag(tag.id);

  const tools = (
    <nav className="tag-index-tools">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      <i className="fa fa-trash" onClick={ handleDelete } aria-hidden="true"></i>
    </nav>
  );

  return (
    <li className="tag-index-item">
      <Link to={ `/tag/${tag.id}` }>
        <div className="tag-item">
          <p>{ tag.name }</p>
        </div>
        { tools }
      </Link>
    </li>
  );
}

export default TagIndexItem;
