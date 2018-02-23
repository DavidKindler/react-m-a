import React from 'react';
// import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000
};
const modal = props => {
  // const cssClasses = ['Modal'];

  //   'Modal',
  //   props.show === 'entering' ? 'ModalOpen' : props.show === 'exiting' ? 'ModalClosed' : null
  // ];
  // let cssClasses = ['Modal', state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null];

  return (
    <CSSTransition mountOnEnter unmountOnExit in={props.show} timeout={animationTiming} classNames="fade-slide">
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
