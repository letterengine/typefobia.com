import Donar from "./Donar";
import MailChimp from "./MailChimp";
import { ModalContext } from "../../store/modal-context";
import { useContext } from "react";
import Gracias from "./Gracias";

export default function ModalConstructor() {
  const modalctx = useContext(ModalContext);
  switch (modalctx.currentModal) {
    case "Donar":
      return <Donar />;
    case "Registro":
      return <MailChimp />;
    case "Gracias":
      return <Gracias />;

    default:
      return null;
  }
}
