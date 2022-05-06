import React, { useEffect } from 'react';
import QuizBody from '../components/QuizBody';
import QuizHeader from '../components/QuizHeader';
import { db } from '../firebaseApp';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { data } from '../data';

console.log(data);
function QuizPage() {
  const fetch = async () => {
    const data = await getDocs(collection(db, 'questions'));
    const res = data.docs.map(item => item.data());
    console.log(res[0].data);
  };

  // const dataRef = collection(db, 'questions');

  // useEffect(() => {
  //   addDoc(dataRef, {
  //     data: data,
  //   });
  // }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div id="quiz-body">
      <QuizHeader />
      <QuizBody />
    </div>
  );
}

export default QuizPage;
