import React from 'react';

const TagIndexHeader = ({ router }) => {
  const newTag = (e) => {
    e.preventDefault();
    router.push("/new-tag");
  }

  return (
    <div className="index-header">
      <h3>TAGS</h3>
      <i onClick={ newTag } className="fa fa-plus" aria-hidden="true"></i>
    </div>
  );
}

export default TagIndexHeader;
