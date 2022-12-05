import { createPortal } from 'react-dom';
import { useContext } from 'react';
import classes from '../../styles/Overlay.module.css';
import { ModalContext } from '../../store/modal-context';

export default function Backdrop() {
    const modalctx = useContext(ModalContext);
    return modalctx.mounted
        ? createPortal(
              <div
                  className={classes.backdrop}
                  onClick={modalctx.mountHandler}
              ></div>,
              document.getElementById('backdrop-root')
          )
        : null;
}
