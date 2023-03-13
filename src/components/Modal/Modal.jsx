import { Fragment, useState, useEffect } from 'react';
import { structuringData } from '../Constants/constants';

import './Modal.css';

import { MdClose } from 'react-icons/md';

const Modal = ({ showModal, toggle }) => {
  const [currState, setCurrentState] = useState(0);
  const data = structuringData[currState];

  useEffect(() => {
    setCurrentState(0);
  }, [showModal]);

  const buttonHandler = (val) => () => {
    if ((currState === 0 && val < 0) || (currState === 5 && val > 0)) return;
    setCurrentState(currState + val);
  };
  if (!showModal) return null;

  return (
    <Fragment>
      <div className="answer-ace-modal">
        <MdClose className="close-icon" onClick={toggle} />
        <div className="content">
          <h1 className="text">AnswerAce</h1>
          <p>{currState === 3 ? (
            <div>
              {structuringData[currState].info}
              <a href='https://youtu.be/_vEJ07K0VPs' target="_blank">Refer this Video</a>
            </div>
          ) : (
            structuringData[currState].info
          )}</p>
          <div className="button-section">
            {currState > 0 ? <button onClick={buttonHandler(-1)}>Prev</button> : <p />}
            <button onClick={currState === 5 ? toggle : buttonHandler(1)}>
              {currState === 5 ? 'Done' : 'Next'}
            </button>
          </div>
        </div>
      </div>
      <div className="answer-ace-backdrop" onClick={toggle} />
    </Fragment>
  );
};

export default Modal;