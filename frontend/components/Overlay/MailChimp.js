import { useRef, useState, useReducer, useContext } from 'react';
import { ModalContext } from '@store/modal-context';
import classes from '@styles/Form.module.css';
// Components
import Backdrop from '@components/Overlay/Backdrop';
import Modal from '@components/Overlay/Modal';
import Form from '@components/Containers/Form';
import Input from '@components/UI/Input';
import Fieldset from '@components/UI/Fieldset';

const meInteresa = ['Typefobia en línea', 'Typefobia presencial', 'Ambos'],
    defaultTextInputs = {
        firstName: '',
        email: '',
    },
    textInputsReducer = (state, action) => {
        switch (action.type) {
            case 'TEXT_INPUT':
                return { ...state, [action.key]: action.val };
            case 'RESET':
                return { ...defaultTextInputs };
        }
        return { ...state };
    };

export default function MailChimp() {
    const [textInputsState, dispatchTextInputs] = useReducer(
            textInputsReducer,
            { ...defaultTextInputs }
        ),
        [radioValue, setRadioValue] = useState(),
        [requestStatus, setRequestStatus] = useState(0),
        modalctxt = useContext(ModalContext),
        fields = [
            {
                ref: useRef(null),
                id: 'firstName',
                type: 'text',
                placeholder: 'Nombre aquí',
                value: textInputsState.firstName,
                label: 'Nombre',
                required: true,
            },
            {
                ref: useRef(null),
                id: 'email',
                type: 'email',
                placeholder: 'Email aquí',
                value: textInputsState.email,
                label: 'Email',
                required: true,
            },
        ],
        textInputChangeHandler = e => {
            dispatchTextInputs({
                type: 'TEXT_INPUT',
                key: e.target.id,
                val: e.target.value,
            });
        },
        handleSettingsChange = e => setRadioValue(e.target.value),
        resetForm = () => {
            setRequestStatus(0);
            dispatchTextInputs({ type: 'RESET' });
            modalctxt.resetModals();
        },
        subscribeUser = async e => {
            e.preventDefault();
            setRequestStatus(1);
            try {
                const res = await fetch('api/subscribeUser', {
                    body: JSON.stringify({
                        FNAME: textInputsState.firstName,
                        email: textInputsState.email,
                        MMERGE6: radioValue,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                });
                setRequestStatus(res.status);
            } catch (err) {
                alert(err);
                resetForm();
                return;
            }
            setTimeout(resetForm, 3000);
        };

    return (
        <>
            <Backdrop />
            <Modal header='¿Estás interesadx?'>
                {requestStatus === 0 || requestStatus === 1 ? (
                    <Form onSubmit={subscribeUser}>
                        {fields.map(field => (
                            <Input
                                key={`registro-${field.id}`}
                                ref={field.ref}
                                id={field.id}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={field.value}
                                label={field.label}
                                required={field.required}
                                onChange={textInputChangeHandler}
                            />
                        ))}
                        <Fieldset
                            legend='Me interesa... *'
                            options={meInteresa}
                            id='radio'
                            name='interesa'
                            onClick={handleSettingsChange}
                        />
                        <p className={classes.info}>
                            * Typefobia utilizará estos datos para estimar las
                            personas que estén interesadxs en asistir al
                            anti-congreso y tomar las mejores decisiones.
                        </p>
                        <input
                            type='submit'
                            className={classes.input}
                            value={
                                requestStatus === 0
                                    ? '¡Pre-Registrate!'
                                    : 'Espera...'
                            }
                            disabled={requestStatus === 0 ? false : true}
                        />
                    </Form>
                ) : (
                    <p className={classes.respuesta}>
                        {requestStatus === 201
                            ? 'Registro Completado'
                            : requestStatus === 400
                            ? 'Correo registrado previamente'
                            : '¡Ocurrió un error desconocido! Recarga la página e intenta de nuevo'}
                    </p>
                )}
            </Modal>
        </>
    );
}
