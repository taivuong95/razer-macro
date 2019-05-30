import React from "react";
import PropTypes from "prop-types";
import "./Editor.css";
const Editor = props => {
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

      <div className="widget editor widget-custom-body">
        <ul class="list-item list-item-editor">
          <li class="item item-editor">
            <input type="checkbox" />
            <label className="check-box" />
            <i class="icon icon-editor time" />
            <span>Delay</span>
          </li>
          <li class="item item-editor">
            <input type="checkbox" />
            <label className="check-box" />
            <i class="icon icon-editor keyboard" />
            <span>Keyboard Function</span>
          </li>
          <li class="item item-editor">
            <input type="checkbox" />
            <label className="check-box" />
            <i class="icon icon-editor keyboard" />
            <span>Keyboard Function</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Editor.propTypes = {};

export default Editor;
