import { useState, useEffect } from 'react';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';
import { useAuth } from '../context/auth-context';
function Auth() {
  const { dispatch, isActive } = useAuth();
  const [formError, setFormError] = useState({
    isError: false,
    errorMsg: '',
  });

  useEffect(() => {
    dispatch({ type: 'RESET_FORM' });
  }, [formError]);

  return (
    <main id="login-signup-page">
      <section className={`forms__container ${isActive ? 'active' : ''}`}>
        <div className="forms">
          <SignIn formError={formError} setFormError={setFormError} />
          <SignUp formError={formError} setFormError={setFormError} />
        </div>
      </section>
    </main>
  );
}

export { Auth };
