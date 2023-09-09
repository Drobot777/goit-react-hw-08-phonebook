import { addContact, fetchContacts, selectContactsDetails } from 'redux/contactReducer';
import css from './Phonebook.module.css';

import {useDispatch, useSelector} from 'react-redux';
import { Filter } from './FilterContacts';
import { Contacts } from './PhoneContacts';
import { useEffect } from 'react';


export const Phonebook = () => {
  const contacts = useSelector (selectContactsDetails);
  const dispath = useDispatch ();
  const handleChange = evt => {
    evt.preventDefault ();
    const form = evt.currentTarget;
    let number = evt.target.number.value;
    let name = evt.target.name.value;
    toggle (name, number);
    form.reset ();
  };

  const toggle = (name, number) => {
    let masName = [];
    contacts.forEach (date => {
      return masName.push (date.name);
    });
    if (masName.includes (name)) {
      return alert ('Rosie Simpson is already in contacts');
    }
    return dispath (
      addContact ({
        name,
    number
      })
    );
  };
  useEffect(()=>{
    dispath(fetchContacts())
  },[dispath])
  return (
    <div className={css.wrraper}>
      <form onSubmit={handleChange} className={css.form}>
        <label className={css.label}>
          <span className={css.span}> Name</span>
          <input
            className={css.inputname}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          <span className={css.span}> Number</span>
          <input
            className={css.inputname}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button}>Add contact</button>
      </form>
      <Filter/>
      <Contacts/>
    </div>
  );
};