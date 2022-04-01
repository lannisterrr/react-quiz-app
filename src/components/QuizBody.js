import { data } from '../data';
import Options from './Options';
import { useQuizState } from '../context/state-context';
import Loader from './Loader';
function QuizBody() {
  const { state } = useQuizState();

  return (
    <>
      {state.loader ? (
        <Loader />
      ) : state.showScore ? (
        <>
          <div className="heading-3 t-c-3 center-text p-v-6">
            You Scored {state.score} out of{' '}
            {data[state.currentQuizActive].questions.length * 10}
          </div>
          {data[state.currentQuizActive].questions.map(item => (
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
      ) : (
        <main className="quiz__wrapper box-shadow-light p-4">
          <h1 className="heading-3 t-c-1 p-v-6 quiz__question">
            {
              data[state.currentQuizActive].questions[state.currentQuestion]
                .questionText
            }
          </h1>

          <div className="quiz__options m-v-6">
            {data[state.currentQuizActive].questions[
              state.currentQuestion
            ].answerOptions.map(item => {
              return <Options key={item.id} item={item} />;
            })}
          </div>
        </main>
      )}
    </>
  );
}

export default QuizBody;
