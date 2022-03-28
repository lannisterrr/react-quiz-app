import React from 'react';

function Options({ item }) {
  return (
    <div class="grey-bg t-c-1 f-7 p-h-4 p-v-6 w-100 center-text round-corner pointer">
      {item.answerText}
    </div>
  );
}

export default Options;
