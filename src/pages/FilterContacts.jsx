import {useState} from 'react';
import css from './Filter.module.css';

import {useDispatch} from 'react-redux';
import { setFilter } from 'redux/contactReducer';

export const Filter = () => {
  const [inputValue, setInputValue] = useState ('');
  const dispath = useDispatch ();
  const handleChange = evt => {
    changeFilter (evt.target.value);
    setInputValue (evt.target.value);
  };
  const changeFilter = value => {
    dispath (setFilter (value));
  };
  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={handleChange}
          className={css.input}
        />
      </label>
    </div>
  );
};