import classes from '@styles/Form.module.css';

export default function Fieldset(props) {
    return (
        <fieldset className={classes.radio}>
            <legend className={classes.legend}>{props.legend}</legend>
            {props.options.map((option, i) => {
                const optionId = `${props.id}${i + 1}`;
                return (
                    <div
                        key={`fieldset-${optionId}`}
                        className={classes['radio-field']}
                    >
                        <input
                            id={optionId}
                            className={classes.input}
                            type='radio'
                            name={props.name}
                            value={option}
                            onClick={props.onClick}
                        ></input>
                        <label className={classes.label} htmlFor={optionId}>
                            {option}
                        </label>
                    </div>
                );
            })}
        </fieldset>
    );
}
