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
      ) : (
        <main class="quiz__wrapper box-shadow-light p-4">
          <h1 class="heading-3 t-c-1 p-v-6 quiz__question">
            {data[0].questions[state.currentQuestion].questionText}
          </h1>

          <div class="quiz__options m-v-6">
            {data[0].questions[state.currentQuestion].answerOptions.map(
              item => (
                <Options key={Math.random()} item={item} />
              )
            )}
          </div>
        </main>
      )}
    </>
  );
}

export default QuizBody;

/*
<div class="red-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer">
          sagital
        </div>
<div class="green-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer">
          interior
        </div>
        <div class="grey-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer">
          exterior
        </div>

*/
