import React, { useRef, useState, useContext } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import classes from "../../styles/Form.module.css";
import { ModalContext } from "../../store/modal-context";

export default function MailChimp() {
  const modalctx = useContext(ModalContext);
  const [radioValue, setRadioValue] = useState();
  const emailRef = useRef(null);
  const firstNameRef = useRef(null);

  const handleSettingsChange = (e) => setRadioValue(e.target.value);

  const subscribeUser = async (e) => {
    e.preventDefault();
    modalctx.mountHandler();
    try {
      const res = await fetch("api/subscribeUser", {
        body: JSON.stringify({
          email: emailRef.current.value,
          FNAME: firstNameRef.current.value,
          MMERGE6: radioValue,
        }),

        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Backdrop />
      <Modal styleModal={classes.modal}>
        <div className={classes.container}>
          <h4 className={classes.titulo}>¿Estás interesadx?</h4>
          <div className={classes.container}>
            <form onSubmit={subscribeUser} className={classes.form}>
              <label className={classes.label} for="firstName-input">
                Nombre
              </label>
              <input
                type="text"
                id="firstName-input"
                name="firstName"
                placeholder="Nombre aquí"
                ref={firstNameRef}
                required
                className={classes.field}
              />
              <label className={classes.label} for="email-input">
                Email
              </label>
              <input
                className={classes.field}
                type="email"
                id="email-input"
                name="email"
                placeholder="Email aquí"
                ref={emailRef}
                required
              />
              <h5 className={classes.subtitulo}>Me interesa... *</h5>
              <div className={classes.radio}>
                <input
                  type="radio"
                  id="radio1"
                  name="radio"
                  value="Typefobia en línea"
                  onClick={handleSettingsChange}
                ></input>
                <label className={classes.label} for="radio1">
                  Typefobia en línea
                </label>
              </div>
              <div className={classes.radio}>
                <input
                  type="radio"
                  id="radio2"
                  name="radio"
                  value="Typefobia presencial"
                  onClick={handleSettingsChange}
                ></input>
                <label className={classes.label} for="radio2">
                  Typefobia presencial
                </label>
              </div>
              <div className={classes.radio}>
                <input
                  type="radio"
                  id="radio3"
                  name="radio"
                  value="Ambos"
                  onClick={handleSettingsChange}
                ></input>
                <label className={classes.label} for="radio3">
                  Ambos
                </label>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  value=""
                  name="subscribe"
                  className={classes.enviar}
                >
                  ¡Pre-Registrate!
                </button>
                <p className={classes.info}>
                  Typefobia utilizará estos datos para estimar las personas que
                  estén interesadxs en asistir al anti-congreso y tomar las
                  mejores decisiones.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
