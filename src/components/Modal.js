import { useQuizState } from '../context/state-context';
import { useNavigate } from 'react-router-dom';

function Modal() {
  const { state, dispatch } = useQuizState();
  const navigate = useNavigate();

  return (
    <div
      className={`modal-overlay modal-container z-index-x-l ${
        state.showModal && 'show-modal'
      }`}
    >
      <div className="modal">
        <div className="modal-header p-4">
          <h3 className="heading-3">Rules Before you start</h3>
          <i
            onClick={() => dispatch({ type: 'MODAL_SHOW', payload: 0 })}
            className="fa fa-times f-8 close-icon close-modal"
          ></i>
        </div>
        <div className="modal-content p-8">
          <ol>
            <li className="f-6">5 Questions total</li>
            <li className="f-6">Each Question is for 10 marks</li>
            <li className="f-6">+10 for correct answer</li>
            <li className="f-6">No negative marking</li>
          </ol>
        </div>
        <div className="modal-button-container p-4">
          <button
            className="btn outline-danger m-h-3 t-c-2"
            id="modal-close-button"
            onClick={() => dispatch({ type: 'MODAL_SHOW' })}
          >
            Close
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="btn btn-danger m-h-3 t-c-1"
          >
            Let's Play!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
