import './App.css';
import Homepage from './pages/Homepage';
import QuizPage from './pages/QuizPage';
import { Routes, Route, Link } from 'react-router-dom';
import EndScorePage from './components/EndScorePage';
import RequiresAuth from './components/RequiresAuth';
import { Auth } from './pages/Auth';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/score" element={<EndScorePage />} />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Homepage />
            </RequiresAuth>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p className="heading-1">There's nothing here!</p>
              <Link to="/" className="heading-2">
                GO to Home
              </Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
