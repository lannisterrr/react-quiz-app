import { useQuizState } from '../context/state-context';

function QuizCard() {
  const { dispatch } = useQuizState();
  return (
    <div class="container-basic">
      <div
        class="content-basic"
        onClick={() => dispatch({ type: 'MODAL_SHOW' })}
      >
        <div class="img-div-basic text-over-container">
          <img
            src="https://images.unsplash.com/photo-1633977264416-8c66c1300e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="brain-image"
            class="w-100"
          />
          <div class="text-div-basic text-over">
            <h2 class="t-c-3 f-7">Quiz 1: Anatomy of the brain.</h2>
            <p>By Siddhant Pandey</p>
          </div>
        </div>
        <div class="text-div-basic">
          <p class="sub-2">
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </p>
        </div>
      </div>
      <div class="cta">
        <div class="cta-button">
          <button
            onClick={() => dispatch({ type: 'MODAL_SHOW' })}
            class="button__cta p-v-4 p-h-6 w-100"
          >
            Start the quiz!
          </button>
        </div>
        <div class="cta-icons">
          <button class="icon__cta">
            <i class="far fa-heart t-c-3"></i>
          </button>
          <button class="icon__cta">
            <i class="fas fa-share-alt t-c-3"></i>
          </button>
          <button class="icon__cta">
            <i class="fas fa-ellipsis-v t-c-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
