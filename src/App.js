import React from "react";
import ProfileBar from "./components/ProfileBar/ProfileBar";
import SideBar from "./components/SideBar/SideBar";
import Editor from "./components/Editor/Editor";
import "./App.css";
import { Provider } from "./store/Context";
import Store from "./store/Store";
import rootReducer from './store/rootReducer'
// import Test from "./store/Context";
function App() {
  return (
    <Store rootReducer={rootReducer}>
    <div className="main-container">
      <div className="nav-tabs flex">
        <div className="nav arrow back" />
        <div className="nav arrow forward disabled" />
        <a className="nav active" href="./macro.html">
          macro
        </a>
      </div>
      <div className="body-wrapper scrollable">
        {/* <Provider> */}
          <ProfileBar />
        {/* </Provider> */}

        <div className="body-widgets flex">
          <div className="widget-col col-left flex">
            <SideBar />
          </div>
          <div className="widget-col col-left flex">
            <Editor />
          </div>
        </div>
      </div>

      <div className="name-bar">razer macro</div>
    </div>
    </Store>
  );
}

export default App;
