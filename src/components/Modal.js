import React from 'react';
import { useQuizState } from '../context/state-context';
import { useNavigate } from 'react-router-dom';

function Modal() {
  const { state, dispatch } = useQuizState();
  const navigate = useNavigate();
  return (
    <div
      class={`modal-overlay modal-container z-index-x-l ${
        state.showModal && 'show-modal'
      }`}
    >
      <div class="modal">
        <div class="modal-header p-4">
          <h3 class="heading-3">Rules Before you start</h3>
          <i
            onClick={() => dispatch({ type: 'MODAL_SHOW' })}
            class="fa fa-times f-8 close-icon close-modal"
          ></i>
        </div>
        <div class="modal-content p-8">
          <ol>
            <li class="f-6">5 Questions total</li>
            <li class="f-6">Each Question is for 10 marks</li>
            <li class="f-6">+10 for correct answer</li>
            <li class="f-6">No negative marking</li>
          </ol>
        </div>
        <div class="modal-button-container p-4">
          <button
            class="btn outline-danger m-h-3 t-c-2"
            id="modal-close-button"
            onClick={() => dispatch({ type: 'MODAL_SHOW' })}
          >
            Close
          </button>
          <button
            onClick={() => navigate('/quiz')}
            class="btn btn-danger m-h-3 t-c-1"
          >
            Let's Play!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
