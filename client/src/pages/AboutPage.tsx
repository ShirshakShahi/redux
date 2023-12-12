// AboutUs.js

import React from "react";

const AboutPage: React.FC = () => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    color: "#333",
    borderBottom: "2px solid #333",
    paddingBottom: "10px",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    lineHeight: "1.6",
    marginBottom: "15px",
  };

  return (
    <div
      style={{
        height: "88vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={containerStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={paragraphStyle}>
          Welcome to our simple Todo App! This intentionally simple app was
          created by Shirshak. It's designed to help you keep track of your
          tasks and stay organized.
        </p>
        <p style={paragraphStyle}>
          Feel free to add, remove, and complete tasks as needed. If you have
          any feedback or suggestions, we'd love to hear from you!
        </p>
        <p style={paragraphStyle}>
          Thank you for using our intentionally simple Todo App. Happy
          organizing!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
