import classes from '@styles/Form.module.css';

export default function Form(props) {
    return (
        <form className={classes.form} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );
}
