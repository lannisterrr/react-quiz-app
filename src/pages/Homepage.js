import QuizCard from '../components/QuizCard';
import { data } from '../data';
import Modal from '../components/Modal';
import { useAuth } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';
function Homepage() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
      console.log('logout');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div id="card-body">
      <p className="heading-2 t-c-1 center-text">Brain Quiz</p>
      <span className="heading-3 t-c-3">Welcome: {user && user.email} </span>
      {user && (
        <button onClick={handleLogOut} class="btn btn-accent log m-h-3 t-c-1">
          Log out
        </button>
      )}
      <main className="card-wrapper">
        {data.map(item => (
          <QuizCard key={item.id} item={item} />
        ))}
      </main>
      <Modal />
    </div>
  );
}

export default Homepage;
