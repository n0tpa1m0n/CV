import React from "react";
import "../styles/App.scss";

const BackgroundContent = () => {
  const codeSnippets = [
    "return 0;",
    'console.log("Hello!");',
    "let x = 42;",
    "0",
    "1",
    "10",
  ];

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="body-stripe" />
      ))}

      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="number"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {snippet}
        </div>
      ))}
    </>
  );
};

export default BackgroundContent;
