import React from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import classes from "../../styles/Form.module.css";

export default function Gracias() {
  return (
    <>
      <Backdrop />
      <Modal styleModal={classes.modal}>
        <div className={classes.container}>
          <h4 className={classes.gracias}>
            Gracias por <br /> Pre-Registrarte
          </h4>
        </div>
      </Modal>
    </>
  );
}
