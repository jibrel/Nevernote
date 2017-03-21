import React from 'react';

const NotebookIndexHeader = ({ router }) => {
  const newNotebook = (e) => {
    e.preventDefault();
    router.push("/new-notebook");
  }

  return (
    <div className="notebook-index-header">
      <h3>NOTEBOOKS</h3>
      <i onClick={ newNotebook } className="fa fa-plus" aria-hidden="true"></i>
    </div>
  );
};

export default NotebookIndexHeader;
