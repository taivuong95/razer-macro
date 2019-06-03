import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/Context";
import useStore from "../../store/useStore";
import StoreContext from "../../store/StoreContext";

const ProfileBar = props => {
  //  const { state, dispatch } = useContext(Context);

  // const {state, dispatch} = useStore();
  const { state, dispatch } = useContext(StoreContext);

  const profileItems = state.reducer.profileItems.map((item, index) => {
    return (
      <div
        className={item.class}
        key={index}
        onClick={() => dispatch({ type: "CHANGE_PROFILE_EDITOR", payload: index  })}
      >
        {item.name}
      </div>
    );
  });

  const selectedIndex = state.reducer.selectedIndex;
  const selectedItem = profileItems[selectedIndex];

  return (
    <div className="profile-bar flex">
      <div className="loader" tooltip="Syncing Profiles" />
      <div>macro</div>
      <input type="text" name="profile" id="profileEdit" maxLength={25} />
      <div className="dropdown-area">
        <div
          id="profileDrop"
          className={
            state.reducer.isExpand ? "s3-dropdown expand" : "s3-dropdown"
          }
          onClick={() => dispatch({ type: "TOGGLE_EXPAND" })}
        >
          <div className="selected" id="itemSelected">{selectedItem.props.children}</div>
          <div className="icon expand" />
        </div>
        <div
          id="profileDropOpt"
          className={
            state.reducer.isExpand
              ? "s3-options flex expand"
              : "s3-options flex"
          }
        >
          {profileItems}
        </div>
      </div>
      <div
        className="dots3 hover-border"
        id="profileMenuToggle"
        onClick={() => dispatch({ type: "TOGGLE_EDIT" })}
      >
        <div
          className={state.reducer.isEdit ? "profile-act show" : "profile-act"}
          id="profileMenu"
        >
          <div
            className="act action"
            onClick={() => {
              dispatch({ type: "ADD_PROFILE_EDITOR" });
            }}
          >
            add
          </div>
          <div className="act action">import</div>
          <div className="act divider" />
          <div className="act action" onClick={() => {
              dispatch({ type: "RENAME_PROFILE_EDITOR" });
            }}>rename</div>
          <div className="act action"  onClick={() => {
              dispatch({ type: "DUPLICATE_PROFILE_EDITOR" });
            }}>duplicate</div>
          <div className="act action">export</div>
          <div className="act divider" />
          <div className="act action" id="deleteAction">
            delete
          </div>
        </div>
      </div>
      <div id="deleteAlert" className="flex alert profile-del">
        <div className="title">delete profile</div>
        <div className="body-text t-center">
          You're about to delete this profile. All bindings in this profile will
          be deleted.
        </div>
        <div className="thx-btn" id="deleteConfirm">
          delete
        </div>
      </div>
      <div className="divider" />
      <div style={{ transform: "translateX(20px)", cursor: "pointer" }}>
        new macro
      </div>
    </div>
  );
};

ProfileBar.propTypes = {};

export default ProfileBar;
