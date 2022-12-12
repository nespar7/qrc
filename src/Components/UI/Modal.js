import React, { Fragment } from "react";

import classes from "./Modal.module.css";

const Backdrop = () => {
    return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return(
    <div className={classes.modal}>
      {props.children}
    </div>
  )
}

function Modal(props) {
    return (
        <Fragment>
            <Backdrop />
            <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>
    );
}

export default Modal;
