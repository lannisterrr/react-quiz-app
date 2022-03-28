import { createContext, useContext, useReducer } from 'react';

const stateContext = createContext({});

const useQuizState = () => useContext(stateContext);

const initialState = {
  showModal: false,
  currentQuestion: 0,
};

function stateReducer(state, action) {
  switch (action.type) {
    case 'MODAL_SHOW':
      return {
        ...state,
        showModal: !state.showModal,
      };

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <stateContext.Provider value={contextValue}>
      {children}
    </stateContext.Provider>
  );
}

export { StateProvider, useQuizState };
