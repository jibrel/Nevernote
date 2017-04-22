import React from 'react';

const ModalIndexHeader = ({ router, indexType }) => {
  if (indexType === "notebook") {
    const header = "NOTEBOOKS";
  }
  else if (indexType === "tag") {
    const header = "TAGS";
  }
  else {
    const header = "SHORTCUTS";
  }

  const newItem = (e) => {
    e.preventDefault();
    router.push(`/new-${indexType}`);
  }

  const renderPlus = () => {
    if (indexType !== "shortcut") {
      return (
        <i onClick={ newItem } className="fa fa-plus" aria-hidden="true"></i>
      );
    }
  }

  return (
    <div className="index-header">
      <h3>{ header }</h3>
      { renderPlus() }
    </div>
  );
};

export default ModalIndexHeader;
