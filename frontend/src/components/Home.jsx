import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the App</h2>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/signin">
        <button>Signin</button>
      </Link>
    </div>
  );
};

export default Home;
