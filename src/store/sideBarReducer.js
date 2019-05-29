const sideBarState = {
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
  ]
};

export default  (state = sideBarState, action) => {
    switch(action.type){
       

      default:
      return state;
    }
}

