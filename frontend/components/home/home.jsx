import React from 'react';

import Sidebar from './sidebar.jsx';
import NoteIndexContainer from '../note_index/note_index_container.js';

const Home = ({ logout, router, children }) => (
  <div>
    <Sidebar logout={ logout } router={ router }/>
    <NoteIndexContainer />
    { children }
  </div>
)

export default Home;
