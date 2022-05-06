import { useQuizState } from '../context/state-context';

function QuizCard({ item }) {
  const { dispatch } = useQuizState();
  return (
    <>
      <div className="container-basic">
        <div
          className="content-basic"
          onClick={() => dispatch({ type: 'MODAL_SHOW', payload: item.id })}
        >
          <div className="img-div-basic text-over-container">
            <img
              src="https://images.unsplash.com/photo-1633977264416-8c66c1300e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="brain-image"
              className="w-100"
            />
            <div className="text-div-basic text-over">
              <h2 className="t-c-3 f-7">Quiz about : {item.name}</h2>
              <p>By Siddhant Pandey</p>
            </div>
          </div>
          <div className="text-div-basic">
            <p className="sub-2">
              Visit ten places on our planet that are undergoing the biggest
              changes today.
            </p>
          </div>
        </div>
        <div className="cta">
          <div className="cta-button">
            <button
              onClick={() => dispatch({ type: 'MODAL_SHOW', payload: item.id })}
              className="button__cta p-v-4 p-h-6 w-100"
            >
              Start the quiz!
            </button>
          </div>
          <div className="cta-icons">
            <button className="icon__cta">
              <i className="far fa-heart t-c-3"></i>
            </button>
            <button className="icon__cta">
              <i className="fas fa-share-alt t-c-3"></i>
            </button>
            <button className="icon__cta">
              <i className="fas fa-ellipsis-v t-c-3"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizCard;
