import Options from './Options';
import { useQuizState } from '../context/state-context';
function QuizBody({ quiz }) {
  const { state } = useQuizState();
  return (
    <main className="quiz__wrapper box-shadow-light p-4">
      <h1 className="heading-3 t-c-1 p-v-6 quiz__question">
        {quiz.questions[state.currentQuestion].questionText}
      </h1>

      <div className="quiz__options m-v-6">
        {quiz.questions[state.currentQuestion].answerOptions.map(
          (item, index) => {
            return (
              <Options key={item.id} index={index} item={item} quiz={quiz} />
            );
          }
        )}
      </div>
    </main>
  );
}

export default QuizBody;

/*
return (
    <>
      {state.loader ? (
        <Loader />
      ) : state.showScore ? (
        <EndScorePage quiz={quiz} />
      ) : (
        <main className="quiz__wrapper box-shadow-light p-4">
          <h1 className="heading-3 t-c-1 p-v-6 quiz__question">
            {quiz.questions[state.currentQuestion].questionText}
          </h1>

          <div className="quiz__options m-v-6">
            {quiz.questions[state.currentQuestion].answerOptions.map(
              (item, index) => {
                return (
                  <Options
                    key={item.id}
                    index={index}
                    item={item}
                    quiz={quiz}
                  />
                );
              }
            )}
          </div>
        </main>
      )}
    </>
  );


*/
