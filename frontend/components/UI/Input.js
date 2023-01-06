import { forwardRef, useRef, useImperativeHandle } from 'react';
import classes from '@styles/Form.module.css';

const Input = forwardRef((props, ref) => {
    const inputRef = useRef(null),
        activate = () => {
            inputRef.current.focus();
        };
    useImperativeHandle(ref, () => {
        return { focus: activate };
    });
    return (
        <div className={classes.field}>
            <label className={classes.label} htmlFor={props.id}>
                {props.label}
            </label>
            <input
                ref={inputRef}
                id={props.id}
                className={classes.input}
                name={props.id}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                required={Boolean(props.required)}
                onChange={props.onChange}
                min={props.min}
                step={props.step}
            />
        </div>
    );
});

export default Input;
