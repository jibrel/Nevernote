import React from 'react';

import Sidebar from './sidebar.jsx';
import NoteIndexContainer from '../note_index/note_index_container.js';
// import NoteDetailContainer from '../note_detail/note_detail_container.js';

const Home = (props) => (
  <div>
    <Sidebar props={ props }/>
    <NoteIndexContainer props={ props }/>
  </div>
)

export default Home;
