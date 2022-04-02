import { data } from '../data';

import React, { useState } from 'react';
import { useQuizState } from '../context/state-context';

function Options({ item }) {
  const { state, dispatch } = useQuizState();

  const [correct, setCorrect] = useState(null);

  // save the user clicked value in a context

  // what user click change that to green or red  - working
  // make the correct answer green

  // 1. three props - onclick , isGreen , isRed
  // 2. what user clicked - save that or initially check
  //3. Check index of the item selected and change color according to index
  // 4. what clicked = true or not , if true then green or red

  const changeBgColor = (item, index) => {
    // Not yet working code
    data[0].questions[state.currentQuestion].answerOptions.map(item => {
      return item.isCorrect ? { ...item, setSelect: true } : item;
    });
    setCorrect(item.isCorrect);
  };

  const changeQuestionHandler = item => {
    const optionSelected = item.id;
    item.isCorrect && dispatch({ type: 'INCREASE_SCORE' });
    if (state.currentQuestion + 1 < data[0].questions.length) {
      changeBgColor(item, optionSelected);
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
