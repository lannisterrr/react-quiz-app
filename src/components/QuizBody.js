import Options from './Options';
import { useQuizState } from '../context/state-context';
import Loader from './Loader';
import EndScorePage from './EndScorePage';
function QuizBody({ quiz, data }) {
  const { state } = useQuizState();
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
            {quiz.questions[state.currentQuestion].answerOptions.map(item => {
              return <Options key={item.id} item={item} quiz={quiz} />;
            })}
          </div>
        </main>
      )}
    </>
  );
}

export default QuizBody;
