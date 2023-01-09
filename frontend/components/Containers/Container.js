import classes from '@styles/Containers.module.css';

export default function Container(props) {
    return (
        <div
            id={props.id}
            className={`${classes.container} ${props.className ?? ''}`.trim()}
        >
            {props.children}
        </div>
    );
}
