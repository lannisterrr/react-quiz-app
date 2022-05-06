import { createContext, useContext, useReducer } from 'react';

const stateContext = createContext({});

const useQuizState = () => useContext(stateContext);

const initialState = {
  showModal: false,
  currentQuestion: 0,
  loader: false,
  showScore: false,
  score: 0,
  currentQuizActive: '',
  optionAnswered: [],
};

function stateReducer(state, action) {
  switch (action.type) {
    case 'MODAL_SHOW':
      return {
        ...state,
        showModal: !state.showModal,
        currentQuizActive: action.payload,
      };

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    case 'LOADER_TOGGLE':
      return {
        ...state,
        loader: action.payload,
      };

    case 'SCORE_SHOW':
      return {
        ...state,
        showScore: true,
      };

    case 'INCREASE_SCORE':
      return {
        ...state,
        score: state.score + 10,
      };

    case 'RESET':
      return initialState;

    case 'ADD_ANSWERED_OPTION':
      return {
        ...state,
        optionAnswered: [...state.optionAnswered, action.payload],
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
