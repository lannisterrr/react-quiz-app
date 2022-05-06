import React from 'react';
import { useQuizState } from '../context/state-context';

function EndScorePage({ quiz }) {
  const { state } = useQuizState();
  return (
    <>
      <div className="heading-3 t-c-3 center-text p-v-6">
        You Scored {state.score} out of {quiz.questions.length * 10}
      </div>
      {quiz.questions.map(item => (
        <main className="quiz__wrapper box-shadow-light p-4">
          <h1 className="heading-3 t-c-1 p-v-6 quiz__question">
            {item.questionText}
          </h1>

          <div className="quiz__options m-v-6">
            {item.answerOptions.map(item => {
              return (
                <div
                  className={`${
                    item.isCorrect ? 'green' : 'grey'
                  }-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer `}
                >
                  {item.answerText}
                </div>
              );
            })}
          </div>
        </main>
      ))}
    </>
  );
}

export default EndScorePage;
