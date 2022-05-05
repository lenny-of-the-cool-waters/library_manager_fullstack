import React, { createContext, useReducer } from "react";

const LayoutStateContext = createContext();
const LayoutDispatchContext = createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function LayoutProvider({ children }) {
  const [state, dispatch] = useReducer(layoutReducer, {
    isSidebarOpened: true,
  });

  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  let context = React.useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }

  return context;
}

function useLayoutDispatch() {
  let context = React.useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }

  return context;
}

function toggleSidebar(dispatch) {
  dispatch({ type: "TOGGLE_SIDEBAR" });
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar };
