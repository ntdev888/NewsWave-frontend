import React, {useState} from 'react';
import './css/MockupContainer.css'; // Import the CSS file
import ReactApp from './react_app.js'; // Import the component correctly with a capitalized name
import LoginScreen from './components/LoginScreen.js'
import MainScreen from "./components/MainScreen.js"

const MockupContainer = () => {

  const [authToken, setAuthToken] = useState("");
  const [user, setUser] = useState("");

  const assignToAuthToken = (value) => {
    setAuthToken(value);
  };

  return (
    <div className="mockup-container">
      {/* The PNG image with the transparent center */}
      <img 
        src="./imgs/phone-mockup.png" 
        alt="Phone Mockup" 
        className="mockup-image" 
      />

      {/* Render the app content behind the mockup */}
      <div className="app-content">
      {authToken === "" ? (
        <LoginScreen setToken={assignToAuthToken} setUser={setUser}/> 
      ) : (
        <MainScreen
          className=""
          authToken={authToken}
          user={user}
        />
      )}
      </div>
    </div>
  );
};

export default MockupContainer;
