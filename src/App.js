import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar.js';
import { selectUser } from './features/userSlice'
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from "./features/userSlice"

function App() {
  // push data to redux store
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // the ser is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is log out
        dispatch(logout())
      }
    });
  },[dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar/>
        <Chat/>
        </>
      ): (
        <Login />
      )}
    </div>
  );
}

export default App;
