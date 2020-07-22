import React from "react";
import logo from "./logo.svg";
import protoTypes from "prop-types";
import Profile from "./profile/profile";
import image from "./mentor.png";

// const data = {
//   fullName: "Mohamed",
//   bio:
//     "I am a Mechanical engineer who has always been passionate about coding.",
//   profession: "Fullstack JS Web Developer",
// };
// const handleName = (a) => alert("Hello " + a);

function App() {
  return (
    <>
      <Profile>
        <h2>Profile picture</h2>
        <img src={image} width="150" height="150" />

      </Profile>
    </>
  );
}

export default App;
