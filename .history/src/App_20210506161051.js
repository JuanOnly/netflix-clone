import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        console.log();
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        //logged out
        dispatch(logout)
      }
    });
    return unsubscribe;
  }, [])

  return (
    <div className="app bg-gray-sdark ">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
