import React, { useEffect } from 'react';
import QuizBody from '../components/QuizBody';
import QuizHeader from '../components/QuizHeader';
import { db } from '../firebaseApp';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { data } from '../data';
import { useParams } from 'react-router-dom';
function QuizPage() {
  const { quizId } = useParams();

  function getQuizDetails(quizes, quizId) {
    return quizes.find(quiz => quiz.id === quizId);
  }
  const quiz = getQuizDetails(data, quizId);

  return (
    <div id="quiz-body">
      <QuizHeader data={data} quiz={quiz} />
      <QuizBody quiz={quiz} data={data} />
    </div>
  );
}

export default QuizPage;

/**
   // const fetch = async () => {
  //   const data = await getDocs(collection(db, 'questions'));
  //   const res = data.docs.map(item => item.data());
  //   console.log(res[0].data);
  // };

  // // const dataRef = collection(db, 'questions');

  // // useEffect(() => {
  // //   addDoc(dataRef, {
  // //     data: data,
  // //   });
  // // }, []);

  // useEffect(() => {
  //   fetch();
  // }, []);
 
 */
