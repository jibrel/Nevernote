import React from 'react';

import Sidebar from './sidebar.jsx';
import NoteIndexContainer from '../note_index/note_index_container.js';

const Home = (props) => (
  <div>
    <Sidebar />
    <NoteIndexContainer />
  </div>
)

export default Home;
