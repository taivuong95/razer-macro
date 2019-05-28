import React from "react";
import ProfileBar from "./components/ProfileBar/ProfileBar";
import SideBar from "./components/SideBar/SideBar";
import Editor from "./components/Editor/Editor";
import './App.css'
function App() {
  return (
    <div className="main-container">
      <div className="nav-tabs flex">
        <div className="nav arrow back" />
        <div className="nav arrow forward disabled" />
        <a className="nav" href="./sound.html">
          sound
        </a>
        <a className="nav" href="./mixer.html">
          mixer
        </a>
        <a className="nav" href="./enhancement.html">
          enhancement
        </a>
        <a className="nav" href="./eq.html">
          eq
        </a>
        <a className="nav active" href="./mic.html">
          mic
        </a>
        <a className="nav" href="./lighting.html">
          lighting
        </a>
        <a className="nav" href="./power.html">
          power
        </a>
        <div className="user">
          <div className="avatar" />
        </div>
      </div>
      <div className="body-wrapper scrollable">
        <ProfileBar />
        <div className="body-widgets flex">
          <div className="widget-col col-left flex" >
          <SideBar/>
          </div>
          <div className="widget-col col-left flex" >
            <Editor/>
          </div>
        </div>
      </div>

      <div className="name-bar">razer macro</div>
    </div>
  );
}

export default App;
