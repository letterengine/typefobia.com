import { createPortal } from 'react-dom';
import { useContext } from 'react';
import classes from '../../styles/Overlay.module.css';
import { ModalContext } from '../../store/modal-context';
// Components
import Button from '../UI/Button';

export default function Modal(props) {
    const modalctx = useContext(ModalContext);
    return modalctx.mounted
        ? createPortal(
              <div className={classes.modal}>
                  {props.children}
                  <Button onClick={modalctx.mountHandler}>Cancelar</Button>
              </div>,
              document.getElementById('overlay-root')
          )
        : null;
}
