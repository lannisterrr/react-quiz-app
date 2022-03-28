import './App.css';
import Homepage from './pages/Homepage';
import QuizPage from './pages/QuizPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
