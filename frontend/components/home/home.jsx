import React from 'react';

import Sidebar from './sidebar.jsx';
import NoteIndexContainer from '../note_index/note_index_container.js';

const Home = (props) => (
  <div>
    <Sidebar props={ props }/>
    <NoteIndexContainer />
    { props.children }
  </div>
)

export default Home;
