import classes from '@styles/Buttons.module.css';

export default function Button(props) {
    return (
        <button
            className={`${classes.button} ${props.className ?? ''}`.trim()}
            onClick={props.onClick}
            type={props.type ?? 'button'}
        >
            {props.children}
        </button>
    );
}
