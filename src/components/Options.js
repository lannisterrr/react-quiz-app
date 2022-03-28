import React from 'react';
import { useQuizState } from '../context/state-context';

function Options({ item, data }) {
  const { state, dispatch } = useQuizState();

  const changeQuestionHandler = () => {
    if (state.currentQuestion + 1 < data[0].questions.length) {
      dispatch({ type: 'LOADER_TOGGLE', payload: true });
      setTimeout(() => {
        dispatch({
          type: 'NEXT_QUESTION',
        });
        dispatch({ type: 'LOADER_TOGGLE', payload: false });
      }, 1200);
    } else {
      alert('hi');
    }
  };

  return (
    <div
      onClick={changeQuestionHandler}
      class="grey-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer"
    >
      {item.answerText}
    </div>
  );
}

export default Options;
