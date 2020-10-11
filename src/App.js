import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="app">
      <Sidebar/>

      <Chat/>
    </div>
  );
}

export default App;
