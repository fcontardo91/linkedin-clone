import React, { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './services/firebase';
import Widgets from './components/Widgets/Widgets';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

   return (
    <div className="app">
      <Header />
      
      {!user ? (
        <Login />
        ) : (      
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        )}
    </div>
  );
}

export default App;
