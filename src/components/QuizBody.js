import React from 'react';

function QuizBody() {
  return (
    <main class="quiz__wrapper box-shadow-light p-4">
      <h1 class="heading-3 t-c-1 p-v-6 quiz__question">
        The best way to see the corpus callosum of the brain is by looking at
        a(n) __________ view.
      </h1>
      <div class="quiz__options m-v-6">
        <div class="red-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer">
          sagital
        </div>
        <div class="green-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer">
          interior
        </div>
        <div class="grey-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer">
          exterior
        </div>
      </div>
    </main>
  );
}

export default QuizBody;
