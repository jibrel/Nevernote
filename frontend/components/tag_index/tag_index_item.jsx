import React from 'react';

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
      <div className="tag-item">
        <p>{ tag.name }</p>
      </div>
      { tools }
    </li>
  );
}

export default TagIndexItem;
