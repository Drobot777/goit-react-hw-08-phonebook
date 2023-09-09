import {useDispatch} from 'react-redux';
import css from '../pages/Registere.module.css';
import {registerUser} from 'redux/authReduxe';

export const RegisterePage = () => {
  const dispatch = useDispatch ();
  const handleSubmit = event => {
    event.preventDefault ();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch (registerUser (formData));
  };
  return (
    <div className={css.wrraper}>
      <h1 className={css.title}>Register</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.span}>Username:</span>
          <input
            className={css.input}
            type="text"
            name="userName"
            placeholder="Enter your name..."
            required
          />
        </label>
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
        <button className={css.button} type="submit">Register</button>
      </form>
    </div>
  );
};
