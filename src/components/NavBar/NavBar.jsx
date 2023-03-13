import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import '../LandingPage.css';

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <div className="header-container">
        <div>
          <button className="digits-delight-show-modal" onClick={toggleModal}>
            Must Read!
          </button>
        </div>

        <div>
          <h1 className="title">
            <Link to="/" className="title">
              AnswerAce
            </Link>
          </h1>
        </div>

        <div>
          <p className="about-us">
            <Link to="/about" className="about-link">
              About Us
            </Link>
          </p>
        </div>

        <Modal showModal={showModal} toggle={toggleModal} />
      </div>
    </>
  );
}

export default NavBar;