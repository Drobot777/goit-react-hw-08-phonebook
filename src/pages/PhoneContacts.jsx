import css from './PhoneContacts.module.css';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import {ColorRing} from 'react-loader-spinner';
import {
  deleteContact,
  selectContactsDetails,
  selectError,
  selectFilterDetails,
  selectIsLoading,
} from 'redux/contactReducer';

export const Contacts = () => {
  const contacts = useSelector (selectContactsDetails);
  const valueFilter = useSelector (selectFilterDetails);
  const load = useSelector (selectIsLoading);
  const error = useSelector (selectError);
  const dispath = useDispatch ();

  const deleteContacts = e => {
    let contactId = e.currentTarget.id;
    dispath (deleteContact (contactId));
  };

  const filterItems = ary => {
    let arryContacts = ary.filter (el => {
      return el.name.toLowerCase ().indexOf (valueFilter.toLowerCase ()) > -1;
    });
    return arryContacts.map ((el, i) => {
      return (
        <li
          key={i.toString ()}
          id={el.id}
          className={css.list}
          onClick={deleteContacts}
        >
          {el.name}
          :
          {el.tel}
          <button type="button" className={css.button}>delete</button>
        </li>
      );
    });
  };
  const renderContacts = arry => {
    if (arry.length === 0) {
      return;
    }
    if (valueFilter === '') {
      return arry.map ((el, i) => {
        return (
          <li
            key={i.toString ()}
            id={el.id}
            className={css.list}
            onClick={deleteContacts}
          >
            {el.name}
            :
            <span className={css.number}>{el.number}</span>
            <button type="button" className={css.button}>delete</button>
          </li>
        );
      });
    }
    return filterItems (arry);
  };

  return (
    <div>
      {load
        ? <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        : <u className={css.item}>
            {renderContacts (contacts)}
          </u>}

      {error && <p>{error}</p>}
    </div>
  );
};
