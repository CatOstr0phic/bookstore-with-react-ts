// import React, { createContext, useContext, useReducer } from "react";

// // Define the interface for the state type based on your application's needs
// interface State {
//   // Add your state properties here with their types
//   initialState: unknown;
// }

// // Define the action type interface to represent different actions that update the state
// interface Action {
//   type: string;
//   payload?: unknown; // Optional payload to carry additional data during actions
// }

// export const StateContext = createContext<State | undefined>(undefined);

// export const StateProvider: React.FC<{ reducer: React.Reducer<State, Action>, initialState: State, children: React.ReactNode }> = ({
//   reducer,
//   initialState,
//   children,
// }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <StateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateValue = (): State => useContext(StateContext)!;

import React, { createContext, useContext, useReducer } from "react";
interface State {
  // Add your state properties here with their types
  initialState: unknown;
}
interface Action {
  type: string;
  payload?: unknown; // Optional payload to carry additional data during actions
}
export const StateContext = createContext({});

export const StateProvider: React.FC<{
  reducer: React.Reducer<State, Action>;
  initialState: State;
  children: React.ReactNode;
}> = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
