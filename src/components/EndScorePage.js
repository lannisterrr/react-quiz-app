import React from 'react';
import { useQuizState } from '../context/state-context';
import { data } from '../data';
import { Link } from 'react-router-dom';

function EndScorePage() {
  const { state, dispatch } = useQuizState();

  const quizData = data.find(el => el.id === state.currentQuizActive);

  const results = state.optionAnswered.map(el => {
    return { ...el, ...quizData?.questions[el.questionIndex] };
  });
  console.log(results);
  return (
    <div id="quiz-body">
      <div className="heading-3 t-c-3 center-text p-v-6">
        You Scored {state.score} out of {quizData.questions.length * 10}
        <Link
          to="/"
          onClick={() => dispatch({ type: 'RESET' })}
          className="header__home-link t-c-4 f-7"
        >
          Home
        </Link>
      </div>
      {results.map(item => {
        const userRight = item.answerOptions[item.answerIndex]?.isCorrect;
        console.log(userRight);
        return (
          <main className="quiz__wrapper box-shadow-light p-4">
            <h1 className="heading-3 t-c-1 p-v-6 quiz__question">
              {userRight ? '✅ ' : '❌ '} {item.questionText}
            </h1>

            <div className="quiz__options m-v-6">
              {item.answerOptions.map((option, index) => {
                return (
                  <>
                    {userRight ? (
                      <div
                        className={`${
                          option.isCorrect ? 'green' : 'grey'
                        }-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer `}
                      >
                        {option.answerText}
                      </div>
                    ) : (
                      <div
                        className={`${
                          item.answerIndex === index
                            ? 'red'
                            : option.isCorrect
                            ? 'green'
                            : 'grey'
                        }-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer `}
                      >
                        {option.answerText}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </main>
        );
      })}
    </div>
  );
}

export default EndScorePage;
