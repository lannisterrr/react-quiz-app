import React, { useState } from 'react';
import { useQuizState } from '../context/state-context';

function Options({ item, quiz }) {
  console.log(item);
  const { state, dispatch } = useQuizState();

  const [correct, setCorrect] = useState(null);
  const changeBgColor = item => {
    setCorrect(item.isCorrect);
  };

  const changeQuestionHandler = item => {
    item.isCorrect && dispatch({ type: 'INCREASE_SCORE' });
    if (state.currentQuestion + 1 < quiz.questions.length) {
      changeBgColor(item);
      setTimeout(() => {
        dispatch({
          type: 'NEXT_QUESTION',
        });
      }, 1200);
    } else {
      dispatch({ type: 'SCORE_SHOW' });
    }
  };

  return (
    <div
      onClick={() => changeQuestionHandler(item)}
      className={`${
        correct === null ? 'grey' : correct ? 'green' : 'red'
      }-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer `}
    >
      {item.answerText}
    </div>
  );
}

export default Options;
