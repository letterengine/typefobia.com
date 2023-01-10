import Container from '@components/Containers/Container';
import classes from '@styles/Taller.module.css';

export default function Taller(props) {
    const id = props.nombre
        .toLowerCase()
        .replace('-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    return (
        <Container className={classes.taller}>
            <h4>{props.nombre}</h4>
            <h5>Objetivo</h5>
            <p className={classes.objetivo}>{props.objetivo}</p>
            <h5>Material</h5>
            <ul>
                {props.material.map((mat, i) => {
                    return typeof mat === 'string' ? (
                        <li key={`${id}-material-${i}`}>{mat}</li>
                    ) : (
                        mat
                    );
                })}
            </ul>
            <h5>Nivel</h5>
            <p>{props.nivel}</p>
            <h5>Tiempo</h5>
            <p>{`${props.horas} horas`}</p>
        </Container>
    );
}
