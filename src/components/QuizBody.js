import { data } from '../data';
import Options from './Options';
import { useQuizState } from '../context/state-context';
import Loader from './Loader';
import EndScorePage from './EndScorePage';
function QuizBody() {
  const { state } = useQuizState();

  return (
    <>
      {state.loader ? (
        <Loader />
      ) : state.showScore ? (
        <EndScorePage data={data} />
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
