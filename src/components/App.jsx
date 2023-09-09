import {NavLink, Route, Routes} from 'react-router-dom';
import {NotFound} from 'pages/NotFound';

import {RegisterePage} from 'pages/RegisterePage';
import {LoginPage} from 'pages/LoginPage';
import { HomePage } from 'pages/HomePage';
import { home_Route, login_Route, phoneContact_Route, registere_Route } from 'contactRoute/routes';
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, refreshUser, selectUserAuthentication, selectUserData } from 'redux/authReduxe';
import { useEffect } from 'react';
import { RestrictedRoute } from './regstricroute/RestrictedRoute';
import { PrivateRoute } from './regstricroute/PrivateRoute';
import { Phonebook } from 'pages/Phonebook';


 const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <div>
      <header className={css.heder}>
        <nav className={css.nav}>
          <NavLink  className={({isActive}) => (isActive ? css.linkActiv : css.link)} to={home_Route}>Home</NavLink>
          {authenticated?<> <NavLink  className={({isActive}) => (isActive ? css.linkActiv : css.link)} to={phoneContact_Route}>Contacts</NavLink>
          <span className={css.user}>Hello, {userData.name}</span>
              <button className={css.btnlogout} onClick={handleLogOut}>Log Out</button></>:<><NavLink  className={({isActive}) => (isActive ? css.linkActiv : css.link)} to={registere_Route}>Registere</NavLink>
          <NavLink  className={({isActive}) => (isActive ? css.linkActiv : css.link)} to={login_Route}>Login-up</NavLink></>}
         </nav>
      </header>
      <main>

        <Routes>
          <Route path={home_Route} element={<HomePage />} />
          <Route path={phoneContact_Route} element={<PrivateRoute><Phonebook /></PrivateRoute>} />
          <Route path={registere_Route} element={<RestrictedRoute redirecTo={phoneContact_Route}><RegisterePage /></RestrictedRoute>} />
          <Route path={login_Route} element={<RestrictedRoute redirecTo={phoneContact_Route}><LoginPage /></RestrictedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </main>
    </div>
  );
};
export default App