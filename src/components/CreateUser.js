import React from 'react';
import '../css/CreateUser.css';

const CreateUser = () => {
  return (
    <div className="android-large-2">
      <img
        className="rectangle"
        alt="Rectangle"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAB1CAYAAABj2nskAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgB7dRBAQAgDAChaf+CS6M17gEhOLv7BoCcOwAkCRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiBI0QJSgAaIEDRAlaIAoQQNECRogStAAUYIGiPrlRAR0FOWMhwAAAABJRU5ErkJggg=="
      />
      <span className="title-text">NEWS WAVE</span>
      <span className="subtext">Discover news effortlessly</span>
      <div className="frame-placeholder">
        <div className="icon-container">
          <img
            className="icon-image"
            alt="Icon"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J001LjY1MDQzIDEuNUMzLjEyOTQzIDEuNSAxLjUwMDQzIDMuMjI3IDEuNTAwNDMgNS44OTlWMTQuMDUxQzEuNTAwNDMgMTYuNzI0IDMuMTI5NDMgMTguNDUgNS42NTA0MyAxOC40NUgxNC4zMDA0QzE2LjgyNzQgMTguNDUgMTguNDYwNCAxNi43MjQgMTguNDYwNCAxNC4wNTFWNS44OTlDMTguNDYwNCAzLjIyNyAxNi44Mjc0IDEuNSAxNC4zMDA0IDEuNUg1LjY1MDQzWk0xNC4zMDA0IDE5Ljk1SDUuNjUwNDNDMi4yNzA0MyAxOS45NSAwLjAwMDQyNzI0NiAxNy41NzkgMC4wMDA0MjcyNDYgMTQuMDUxVjUuODk5QzAuMDAwNDI3MjQ2IDIuMzcxIDIuMjcwNDMgMCA1LjY1MDQzIDBIMTQuMzAwNEMxNy42ODU0IDAgMTkuOTYwNCAyLjM3MSAxOS45NjA0IDUuODk5VjE0LjA1MUMxOS45NjA0IDE3LjU3OSAxNy42ODU0IDE5Ljk1IDE0LjMwMDQgMTkuOTVaJyBmaWxsPScjNjE2NDZCJy8+Cjwvc3ZnPgo="
          />
        </div>
      </div>
      <span className="label email">Email</span>
      <div className="input-container">Empty</div>
      <span className="label password">Password</span>
      <div className="input-container">Empty</div>
      <span className="label name">Name</span>
      <div className="input-container">Empty</div>
      <button className="button create-account">Create Account</button>
      <button className="button cancel">Cancel</button>
    </div>
  );
};

export default CreateUser;
