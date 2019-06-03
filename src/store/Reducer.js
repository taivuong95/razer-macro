var addCounter = 1;
var dupCounter = 1;
const initialState = {
  isEdit: false,
  isRename: false,
  isDelete: false,
  isExpand: false,
  selectedIndex: 0,
  profileItems: [{ name: "Macro 1", class: "option selected" }],
  sideBarItems: [
    {
      id: 1,
      icon: "time",
      text: "Delay"
    },
    {
      id: 2,
      icon: "keyboard",
      text: "Keyboard Function"
    },
    {
      id: 3,
      icon: "mouse",
      text: "Mouse Function"
    },
    {
      id: 4,
      icon: "macro",
      text: "Macro"
    },
    {
      id: 5,
      icon: "switch",
      text: "Switch Device Profile"
    },
    {
      id: 6,
      icon: "switch-light",
      text: "Switch Lighting"
    },
    {
      id: 7,
      icon: "launch",
      text: "Launch"
    },
    {
      id: 8,
      icon: "command",
      text: "Run Command"
    },
    {
      id: 9,
      icon: "multimedia",
      text: "Multimedia"
    },
    {
      id: 10,
      icon: "text-function",
      text: "Text Function"
    },
    {
      id: 11,
      icon: "loop",
      text: "Loop"
    }
  ],
  editorItems: [], // mang cac item trong editor duoc chon
  widgetItems: [{ name: "Editor 1", editorItems: [] }] // mang cac editor
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_EDITOR":
      var cloneEditorItems = [...state.editorItems];
      // them item vao editor dang chon
      cloneEditorItems.push(state.sideBarItems[action.payload]);
      // them editor dang chon vao mang editor
      var cloneWidgetItems = [...state.widgetItems];

      cloneWidgetItems[state.selectedIndex].editorItems = [...cloneEditorItems];
      return {
        ...state,
        editorItems: cloneEditorItems,
        widgetItems: cloneWidgetItems
      };
    case "ADD_PROFILE_EDITOR":
      var cloneProfileItems = [...state.profileItems];
      cloneProfileItems.forEach(element => {
        element.class = "option";
      });
      var newProfile = {
        name: "New Macro " + "(" + addCounter + ")",
        class: "option selected"
      };
      cloneProfileItems = [...cloneProfileItems, newProfile];
      addCounter++;
      var cloneWidgetItems = [...state.widgetItems];
      var newWidget = {
        name: "New Editor " + "(" + addCounter + ")",
        editorItems: []
      };
      cloneWidgetItems = [...cloneWidgetItems, newWidget];

      return {
        ...state,
        editorItems: [],
        profileItems: cloneProfileItems,
        widgetItems: cloneWidgetItems,
        selectedIndex: cloneProfileItems.length - 1
      };

    case "DUPLICATE_PROFILE_EDITOR":
      let selectedItem = document.getElementById("itemSelected");
      let selectedItemName = selectedItem.innerText;
      var open = selectedItemName.lastIndexOf("(");
      var close = selectedItemName.lastIndexOf(")");
      if (open > 0 && close > 0 && close > open) {
        dupCounter = parseInt(selectedItemName.substring(open + 1, close)) + 1;
        selectedItemName = selectedItemName.substring(0, open);
      } else {
        dupCounter = 1;
      }
      selectedItemName = selectedItemName + " (" + dupCounter + ")";

      var cloneProfileItems = [...state.profileItems];
      cloneProfileItems.forEach(element => {
        element.class = "option";
      });
      var newProfile = {
        name: selectedItemName,
        class: "option selected"
      };
      cloneProfileItems = [...cloneProfileItems, newProfile];
      dupCounter++;
      var cloneWidgetItems = [...state.widgetItems];
      var newWidget = {
        name: "New Editor " + "(" + dupCounter + ")",
        editorItems: [...cloneWidgetItems[state.selectedIndex].editorItems]
      };
      cloneWidgetItems = [...cloneWidgetItems, newWidget];
      console.log(cloneWidgetItems[state.selectedIndex].editorItems);

      return {
        ...state,
        // editorItems: [],
        profileItems: cloneProfileItems,
        widgetItems: cloneWidgetItems,
        selectedIndex: cloneProfileItems.length - 1
      };

    case "CHANGE_PROFILE_EDITOR":
      var cloneProfileItems = [...state.profileItems];
      var cloneWidgetItems = [...state.widgetItems];
      var cloneEditorItems = [...cloneWidgetItems[action.payload].editorItems];
      // console.log(cloneEditorItems);

      cloneProfileItems.forEach(element => {
        element.class = "option";
      });
      cloneProfileItems[action.payload].class = "option selected";

      return {
        ...state,
        editorItems: cloneEditorItems,
        widgetItems: cloneWidgetItems,
        profileItems: cloneProfileItems,
        selectedIndex: action.payload
      };

    case "RENAME_PROFILE_EDITOR":
      let itemSelected = document.getElementById("itemSelected");
      let itemSelectedName = itemSelected.innerText;
      var profileEdit = document.getElementById("profileEdit");
      profileEdit.value = itemSelectedName;
      return { ...state, isRename: !state.isRename };

    case "ON_RENAME_PROFILE_EDITOR_HANDLER":
      console.log(action.payload);
      console.log(state.selectedIndex);

      var cloneProfileItems = [...state.profileItems];
      var cloneWidgetItems = [...state.widgetItems];
      var cloneEditorItems = [
        ...cloneWidgetItems[state.selectedIndex].editorItems
      ];
      cloneProfileItems[state.selectedIndex].name = action.payload;
      return {
        ...state,
        editorItems: cloneEditorItems,
        widgetItems: cloneWidgetItems,
        profileItems: cloneProfileItems,
        isRename:false
      };

    case "TOGGLE_EDIT":
      return { ...state, isEdit: !state.isEdit };
    case "TOGGLE_EXPAND":
      return { ...state, isExpand: !state.isExpand };
    default:
      return state;
  }
};
