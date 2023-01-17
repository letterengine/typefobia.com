import Image from 'next/image';
import classes from '@styles/Actividad.module.css';
import Container from '@components/Containers/Container';
import Highlight from './Highlight';

export default function Actividad(props) {
    return (
        <Container id={props.id}>
            <h2>{props.label}</h2>
            <div className={classes.wrapper}>
                <Image
                    alt={props.label}
                    src={props.img}
                    width={props.width}
                    height={props.height}
                />
            </div>
            <Highlight contenido={props.contenido} left={true} />
        </Container>
    );
}
