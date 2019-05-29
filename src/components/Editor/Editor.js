import React from "react";
import PropTypes from "prop-types";
import "./Editor.css";
const Editor = props => {
  return (
    <div className="widget widget-custom-for-editor" id="Editor">
      <div className="head-editor">
        <div className="check-item check-item-custom">
          <input type="checkbox" />
          <label  className="check-box">
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
  );
};

Editor.propTypes = {};

export default Editor;
