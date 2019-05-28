import React from "react";
import PropTypes from "prop-types";
import img from "../../assets/img_ui_3/icon_time.svg";
import "./SideBar.css";
const SideBar = props => {
  return (
    <div className="widget" id="SideBar">
        <p className="add-title title">ADD</p>
        <ul className="list-item">
          <li className="item">
            <i className="icon time" />
            <span>Delay</span>
          </li>
          <li className="item">
            <i className="icon keyboard" />
            <span>Keyboard Function</span>
          </li>

          <li className="item">
            <i className="icon mouse" />
            <span>Mouse Function</span>
          </li>

          <li className="item">
            <i className="icon macro" />
            <span>Macro</span>
          </li>

          <li className="item">
            <i className="icon switch" />
            <span>Switch Device Profile</span>
          </li>

          <li className="item">
            <i className="icon switch-light" />
            <span>Switch Lighting</span>
          </li>

          <li className="item">
            <i className="icon launch" />
            <span>Launch</span>
          </li>

          <li className="item">
            <i className="icon command" />
            <span>Run Command</span>
          </li>

          <li className="item">
            <i className="icon multimedia" />
            <span>Multimedia</span>
          </li>

          <li className="item">
            <i className="icon text-function" />
            <span>Text Function</span>
          </li>

          <li className="item">
            <i className="icon loop" />
            <span>Loop</span>
          </li>

          
        </ul>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
