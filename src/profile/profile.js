import React from "react";
import protoTypes from "prop-types";

function Profile({ data, handleName, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        margin: "20px",
        backgroundColor: "#f1f2f3",
        height: "100vh",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          margin: "0px 20px 20px 20px",
        }}
      >
        {children}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <h2>Name</h2>
        <label>{data.fullName}</label>
        <h2>Bio</h2>
        <label>{data.bio}</label>

        <h2>Profession</h2>
        <label>{data.profession}</label>
      </div>
      {handleName(data.fullName)}
    </div>
  );
}
Profile.defaultProps = {
  data: {
    fullName: "Mohamed",
    bio:
      "I am a Mechanical engineer who has always been passionate about coding.",
    profession: "Fullstack JS Web Developer",
  },
  handleName: (x) => alert("Hello " + x),
};
Profile.protoTypes = {
  data: protoTypes.object,
  handleName: protoTypes.func,
  children: protoTypes.any,
};
export default Profile;
