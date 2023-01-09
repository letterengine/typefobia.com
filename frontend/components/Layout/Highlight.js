import classes from '@styles/Highlight.module.css';
import Container from '@components/Containers/Container';

export default function Highlight(props) {
    return (
        <Container
            className={`${classes.highlight} ${
                props.left ? classes.left : ''
            }`.trim()}
            id={props.id}
        >
            {props.contenido}
        </Container>
    );
}
