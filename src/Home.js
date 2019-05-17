import React from "react";
import app from "./base";

const Home = () => {
  return (
    <>
      <h1>Hello there!</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;