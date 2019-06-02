import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./Editor.css";
import StoreContext from "../../store/StoreContext";
const Editor = props => {
  const { state, dispatch } = useContext(StoreContext);

  const selectedIndex = state.reducer.selectedIndex;
  console.log('dang o editor ' + selectedIndex)
  var itemsOnEditor = state.reducer.widgetItems[selectedIndex].editorItems.map((item, index) => (
    <li className="item item-editor" key={index}>
      <input type="checkbox" />
      <label className="check-box" />
      <i className={"icon " + item.icon} />
      <span>{item.text}</span>
    </li>
  ));


  var widget = (
    <div className="widget editor widget-custom-body">
      <ul className="list-item list-item-editor">{itemsOnEditor} </ul>
    </div>
  );
  
 
  return (
    <>
      <div className="widget widget-custom-head editor">
        <div className="head-editor">
          <div className="check-item check-item-custom">
            <input type="checkbox" />
            <label className="check-box">
              <div className="check-text check-text-custom">
                <li className="item-2">
                  <i className="icon time-2" />
                  <span>12.3s</span>
                </li>
              </div>
            </label>
          </div>
          <div>
            <i className="icon undo" />
            <i className="icon redo" />
          </div>
        </div>
      </div>
      {widget}
      {/* {selectedEditor.editor} */}
      {/* <div className="widget editor widget-custom-body">
        <ul className="list-item list-item-editor">
          <li className="item item-editor">
            <input type="checkbox" />
            <label className="check-box" />
            <i className="icon icon-editor time" />
            <span>Delay</span>
          </li>
          <li className="item item-editor">
            <input type="checkbox" />
            <label className="check-box" />
            <i className="icon icon-editor keyboard" />
            <span>Keyboard Function</span>
          </li>
          <li className="item item-editor">
            <input type="checkbox" />
            <label className="check-box" />
            <i className="icon icon-editor keyboard" />
            <span>Keyboard Function</span>
          </li>
        </ul>
      </div> */}
    </>
  );
};

Editor.propTypes = {};

export default Editor;
