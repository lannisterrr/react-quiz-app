import { v4 as uuidv4 } from 'uuid';

export const data = [
  {
    id: uuidv4(),
    name: 'Capitals',
    questions: [
      {
        questionText: 'What is the capital of france?',
        answerOptions: [
          { answerText: 'New York', isCorrect: false },
          { answerText: 'London', isCorrect: false },
          { answerText: 'Paris', isCorrect: true },
          { answerText: 'Dublin', isCorrect: false },
        ],
      },

      {
        questionText: 'What is the capital of India?',
        answerOptions: [
          { answerText: 'New Delhi', isCorrect: true },
          { answerText: 'London', isCorrect: false },
          { answerText: 'Paris', isCorrect: false },
          { answerText: 'Mumbai', isCorrect: false },
        ],
      },

      {
        questionText: 'What is the capital of Pakistan?',
        answerOptions: [
          { answerText: 'New York', isCorrect: false },
          { answerText: 'Islamabad', isCorrect: true },
          { answerText: 'karachi', isCorrect: false },
          { answerText: 'Lahore', isCorrect: false },
        ],
      },

      {
        questionText: 'What is the capital of Italy?',
        answerOptions: [
          { answerText: 'Venice', isCorrect: false },
          { answerText: 'London', isCorrect: false },
          { answerText: 'Rome', isCorrect: true },
          { answerText: 'Capetown', isCorrect: false },
        ],
      },

      {
        questionText: 'What is the capital of Bangladesh?',
        answerOptions: [
          { answerText: 'Amritsar', isCorrect: false },
          { answerText: 'Dhaka', isCorrect: true },
          { answerText: 'Kolkata', isCorrect: false },
          { answerText: 'Portland', isCorrect: false },
        ],
      },
    ],
  },
];
