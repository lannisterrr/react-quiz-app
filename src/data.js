import { v4 as uuidv4 } from 'uuid';

export const data = [
  {
    id: uuidv4(),
    name: 'Capitals',
    questions: [
      {
        questionText: 'What is the capital of france?',
        answerOptions: [
          {
            answerText: 'New York',
            isCorrect: false,
          },
          {
            answerText: 'London',
            isCorrect: false,
          },
          {
            answerText: 'Paris',
            isCorrect: true,
          },
          {
            answerText: 'Dublin',
            isCorrect: false,
          },
        ],
      },

      {
        questionText: 'What is the capital of India?',
        answerOptions: [
          {
            answerText: 'New Delhi',
            isCorrect: true,
          },
          {
            answerText: 'London',
            isCorrect: false,
          },
          {
            answerText: 'Paris',
            isCorrect: false,
          },
          {
            answerText: 'Mumbai',
            isCorrect: false,
          },
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

  {
    id: uuidv4(),
    name: 'france',
    questions: [
      {
        questionText: 'What is the name of the French national anthem?',
        answerOptions: [
          {
            answerText: 'La Niçoise',
            isCorrect: false,
          },
          {
            answerText: 'La Parisienne',
            isCorrect: false,
          },
          {
            answerText: 'La France',
            isCorrect: false,
          },
          {
            answerText: 'La Marseillaise',
            isCorrect: true,
          },
        ],
      },

      {
        questionText: 'What currency is used in France?',
        answerOptions: [
          {
            answerText: 'The Pound',
            isCorrect: false,
          },
          {
            answerText: 'The france',
            isCorrect: false,
          },
          {
            answerText: 'The Euro',
            isCorrect: true,
          },
          {
            answerText: 'The lira',
            isCorrect: false,
          },
        ],
      },

      {
        questionText: 'When did France last win the Football World Cup?',
        answerOptions: [
          { answerText: '1994', isCorrect: false },
          { answerText: '1998', isCorrect: true },
          { answerText: '2002', isCorrect: false },
          { answerText: '2006', isCorrect: false },
        ],
      },

      {
        questionText: 'Who leads the country in France?',
        answerOptions: [
          { answerText: 'A Prime Minister', isCorrect: false },
          { answerText: 'A king or a queen', isCorrect: false },
          { answerText: 'A President', isCorrect: true },
          {
            answerText: 'A member of parliament',
            isCorrect: false,
          },
        ],
      },

      {
        questionText: 'How many countries in the world speak French?',
        answerOptions: [
          { answerText: '5', isCorrect: false },
          { answerText: '29', isCorrect: true },
          { answerText: '1', isCorrect: false },
          { answerText: '12', isCorrect: false },
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'India',
    questions: [
      {
        questionText:
          'Which of these holds the title of the largest cricket stadium in the world?',
        answerOptions: [
          {
            answerText: 'Chepauk Stadium, Chennai',
            isCorrect: false,
          },
          {
            answerText: 'Wankhede Stadium, Mumbai',
            isCorrect: false,
          },
          {
            answerText: 'Narendra Modi Stadium, Ahmedabad',
            isCorrect: true,
          },
          {
            answerText: 'Arun Jaitley Stadium, Delhi',
            isCorrect: false,
          },
        ],
      },

      {
        questionText:
          'Which city of India is also known as the ‘Venice of the East’?',
        answerOptions: [
          {
            answerText: 'Alleppey, Kerala',
            isCorrect: true,
          },
          {
            answerText: 'Cherrapunji, Meghalaya',
            isCorrect: false,
          },
          {
            answerText: 'Gokarna, Karnataka',
            isCorrect: false,
          },
          {
            answerText: 'Pondicherry',
            isCorrect: false,
          },
        ],
      },

      {
        questionText: 'which of this is known as the Yoga Capital of India?',
        answerOptions: [
          {
            answerText: 'Varanasi, Uttar Pradesh',
            isCorrect: false,
          },
          {
            answerText: 'Rishikesh, Uttarakhand',
            isCorrect: true,
          },
          {
            answerText: 'Haridwar, Uttarakhand',
            isCorrect: false,
          },
          {
            answerText: 'Dharamshala, Himachal Pradesh',
            isCorrect: false,
          },
        ],
      },

      {
        questionText:
          'Why is Bengaluru known as the ‘Silicon Valley of India’?',
        answerOptions: [
          {
            answerText: 'For being the nation’s leading IT exporter',
            isCorrect: true,
          },
          {
            answerText: 'For making a silicon park',
            isCorrect: false,
          },
          {
            answerText: 'For a large number of silicon industries',
            isCorrect: false,
          },
          { answerText: 'None of the above', isCorrect: false },
        ],
      },

      {
        questionText:
          'Named after a famous British hunter turned naturalist, what is the name of India’s first national park?',
        answerOptions: [
          {
            answerText: 'Nokrek National Park',
            isCorrect: false,
          },
          {
            answerText: 'Jim Corbett National Park',
            isCorrect: true,
          },
          {
            answerText: 'Mount Harriet National Park',
            isCorrect: false,
          },
          {
            answerText: 'Murlen National Park',
            isCorrect: false,
          },
        ],
      },
    ],
  },
];
