import './App.css';
import React from 'react';
import {useState,useEffect} from "react";
import Form from './components/form';
import NavBar from './components/Navbar';

const App=()=>{
  [songs, setSongs] = useState([
    {
     '' title": "",
        "artist": "",
        "album": "",
        "track": ""
    }
  ])

return (
  <div className="App">
    MusicPlayer
  </div>
);
}

export default App;