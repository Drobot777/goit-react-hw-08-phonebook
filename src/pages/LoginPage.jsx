import {useDispatch} from 'react-redux';
import css from '../pages/LoginPage.module.css';
import {loginUser} from 'redux/authReduxe';

export const LoginPage = () => {
  const dispatch = useDispatch ();
  const handleSubmit = event => {
    event.preventDefault ();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch (loginUser (formData));
  };
  return (
    <div className={css.wrraper}>
      <h1 className={css.title}>Login-up</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.span}>Email:</span>
          <input
            className={css.input}
            type="email"
            name="userEmail"
            placeholder="Enter your email..."
            required
          />
        </label>
        <label className={css.label}>
          <span className={css.span}>Password:</span>
          <input
            className={css.input}
            type="password"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
            required
          />
        </label>
        <button className={css.button} type="submit">Login</button>
      </form>
    </div>
  );
};
