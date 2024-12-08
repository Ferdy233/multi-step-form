import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./StarterPage.scss";

const StarterPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the signup form
  };

  return (
    <>
      <header className="header">
        <h1>LOREM GAMING</h1>
      </header>
      <main className="main">
        <section className="callToAction">
          <h2>Experience the Ultimate Gaming Adventure</h2>
          <button className="signupButton" onClick={handleSignupClick}>
            Sign Up
          </button>
        </section>
      </main>
    </>
  );
};

export default StarterPage;