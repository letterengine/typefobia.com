import classes from '@styles/Containers.module.css';

export default function Section(props) {
    return (
        <section
            id={props.id}
            className={`${classes.section} ${props.className ?? ''}`.trim()}
        >
            {props.children}
        </section>
    );
}
