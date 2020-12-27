import React, { useEffect } from 'react';
import GithubCorner from "react-github-corner";
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

  const githubCornerUrl= "https://github.com/leopaul29/discord-clone"

  return (
    <div className="app">
      <GithubCorner
            href={githubCornerUrl}
            target="_blank"
            rel="noopener noreferrer"
            bannerColor="#fff"
            octoColor="gray"
            size={80}
            direction="right"
            target="_blank"
            rel="noopener noreferrer"
          />
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
