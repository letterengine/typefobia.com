import Donar from "./Donar";
import MailChimp from "./MailChimp";
import { ModalContext } from "../../store/modal-context";
import { useContext } from "react";

export default function ModalConductor() {
  const modalctx = useContext(ModalContext);
  switch (modalctx.currentModal) {
    case "Donar":
      return <Donar />;

    case "Registro":
      return <MailChimp />;

    default:
      return null;
  }
}
