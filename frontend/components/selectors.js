import merge from 'lodash/merge';

const noteSelector = (notes = {}, pathname) => {
  const noteKeys = Object.keys(notes);
  const newNotes = {};

  if (pathname.startsWith("/notebook/")) {
    const notebookId = pathname.slice(10);
    noteKeys.forEach(key => {
      if (notes[key].notebook_id == notebookId) {
        newNotes[key] = notes[key];
      }
    });
    return newNotes;
  }
  else if (pathname.startsWith("/tag/")) {
    const tagId = pathname.slice(5);
    noteKeys.forEach(key => {
      if (notes[key].tag_id == tagId) {
        newNotes[key] = notes[key];
      }
    });
    return newNotes;
  }
  else {
    return notes;
  }
}

export default noteSelector;
