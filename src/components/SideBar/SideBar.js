import React, { useContext } from "react";
import PropTypes from "prop-types";
import img from "../../assets/img_ui_3/icon_time.svg";
import "./SideBar.css";
import StoreContext from "../../store/StoreContext";
const SideBar = props => {
  const { state, dispatch } = useContext(StoreContext);
  const listItems = state.reducer.sideBarItems.map((item, index) => {
    return (
      <li className="item" key={index} onClick={() => dispatch({ type: "ADD_ITEM_TO_EDITOR", payload: index })}>
        <i className={"icon " + item.icon} />
        <span>{item.text}</span>
        <i className="icon more"></i>
      </li>
    );
  })
  
  return (
    <div className="widget widget-custom" id="SideBar">
      <p className="add-title title">ADD</p>
      <ul className="list-item">
        {listItems}
      </ul>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
