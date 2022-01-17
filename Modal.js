import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import Form from './Form';


const Backdrop = (props) => {
return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = (props) => {
  return (
  <div className={classes.modal}>
           <div className={classes.content}>
            <Form Close={props.onClose} />
           </div>
  </div>
  )
};

const OverlayElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, OverlayElement)}
            {ReactDOM.createPortal(<ModalOverlay></ModalOverlay>, OverlayElement)}
        </React.Fragment>
    )
}

export default Modal;
