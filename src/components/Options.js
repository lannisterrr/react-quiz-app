import React, { useState } from 'react';
import { useQuizState } from '../context/state-context';
import { useNavigate } from 'react-router-dom';

function Options({ item, quiz, index }) {
  const { state, dispatch } = useQuizState();
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(null);
  const changeBgColor = item => {
    setCorrect(item.isCorrect);
  };
  const changeQuestionHandler = item => {
    item.isCorrect && dispatch({ type: 'INCREASE_SCORE' });
    const nextQuestion = state.currentQuestion + 1;
    if (nextQuestion === quiz.questions.length) {
      navigate('/score');
    }
    changeBgColor(item);
    dispatch({
      type: 'ADD_QUESTION_DATA',
      payload: {
        userAnswerId: item.id,
        questionIndex: state.currentQuestion,
        answerIndex: index,
      },
    });
    setTimeout(() => {
      dispatch({
        type: 'NEXT_QUESTION',
      });
    }, 1200);
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
