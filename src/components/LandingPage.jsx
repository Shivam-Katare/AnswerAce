import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import NavBar from "./NavBar/NavBar";
import "./LandingPage.css";

function LandingPage({ doStuff, setInput, result, isLoading }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    setText(event.target.value)
  };

  return (
    <div className="answer-ace-container">
      <NavBar />
      <form className="text-box">
        <textarea
          placeholder="Type something... Enter something to talk to the AI"
          required
          onChange={handleChange}
        />
      </form>
      <div style={{ height: "3rem" }} className="answer-me">
        <button className="answer-me-btn" onClick={doStuff} disabled={text === ""}>
          Answer Me
        </button>
      </div>
      <div
        style={{ background: "#353535", padding: "12px 38px" }}
        className="result-container"
        id="style-4"
      >
        <div className="result-text">
          {isLoading ? "Thinking...💬" :
            result.length > 0 && (
              <div>
                <h3>Answer:</h3>
                {result.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )
          }
        </div>
      </div>
      <Modal showModal={showModal} toggle={toggleModal} />
      <Footer />
    </div>
  );
}

export default LandingPage;
