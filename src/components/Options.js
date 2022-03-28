import React from 'react';
import { useQuizState } from '../context/state-context';

function Options({ item, data }) {
  const { state, dispatch } = useQuizState();

  const changeQuestionHandler = isCorrect => {
    isCorrect && dispatch({ type: 'INCREASE_SCORE' });
    if (state.currentQuestion + 1 < data[0].questions.length) {
      dispatch({ type: 'LOADER_TOGGLE', payload: true });
      setTimeout(() => {
        dispatch({
          type: 'NEXT_QUESTION',
        });
        dispatch({ type: 'LOADER_TOGGLE', payload: false });
      }, 1200);
    } else {
      dispatch({ type: 'SCORE_SHOW' });
    }
  };

  return (
    <div
      onClick={() => changeQuestionHandler(item.isCorrect)}
      class="grey-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer"
    >
      {item.answerText}
    </div>
  );
}

export default Options;
