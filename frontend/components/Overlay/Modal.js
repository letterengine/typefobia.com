import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { ModalContext } from '@store/modal-context';
import classes from '@styles/Overlay.module.css';
// Components
import Button from '@components/UI/Button';

export default function Modal(props) {
    const modalctx = useContext(ModalContext);
    return modalctx.mounted
        ? createPortal(
              <div
                  className={`${classes.modal} ${props.className ?? ''}`.trim()}
              >
                  <h4>{props.header}</h4>
                  {props.children}
                  <Button onClick={modalctx.mountHandler}>Salir</Button>
              </div>,
              document.getElementById('overlay-root')
          )
        : null;
}
