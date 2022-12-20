import React, { useRef, useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export default function MailChimp() {
  const [radioValue, setRadioValue] = useState();
  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const radioeRef = useRef(null);

  const handleSettingsChange = (e) => setRadioValue(e.target.value);

  const subscribeUser = async (e) => {
    e.preventDefault();
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
  };

  return (
    <>
      <Backdrop />
      <Modal>
        <div className="">
          <div className="">
            <h1 className="">Subscribete </h1>
            <h4>¿Estás interesadx?</h4>
          </div>
          <div className="">
            <form onSubmit={subscribeUser}>
              <label for="email-input">Pon tu email</label>
              <input
                type="email"
                id="email-input"
                name="email"
                placeholder="Email aquí"
                ref={emailRef}
                required
              />
              <label for="firstName-input">Pon tu Nombre</label>
              <input
                type="text"
                id="firstName-input"
                name="firstName"
                placeholder="Nombre aquí"
                ref={firstNameRef}
                required
              />
              <h5>Me interesa... *</h5>

              <label for="radio1">Typefobia en línea</label>
              <input
                ref={radioeRef}
                type="radio"
                id="radio1"
                name="radio"
                value="Typefobia en línea"
                onClick={handleSettingsChange}
              ></input>
              <label for="radio2">Typefobia presencial</label>
              <input
                ref={radioeRef}
                type="radio"
                id="radio2"
                name="radio"
                value="Typefobia presencial"
                onClick={handleSettingsChange}
              ></input>
              <label for="radio3">Ambos</label>
              <input
                ref={radioeRef}
                type="radio"
                id="radio3"
                name="radio"
                value="Ambos"
                onClick={handleSettingsChange}
              ></input>
              <div className="flex justify-center items-center">
                <button type="submit" value="" name="subscribe" className="">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
