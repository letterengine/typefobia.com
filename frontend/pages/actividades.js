import contenido from '@content/actividadesContent';
import classes from '@styles/SubNav.module.css';
// Components
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';
import Highlight from '@components/Layout/Highlight';

export default function Talleres() {
    return (
        <>
            <MainContainer>
                <h1>Actividades</h1>
                <div className={classes['sub-nav']}>
                    <a href='#mesa-redonda'>Mesa Redonda</a>
                    <a href='#anti-exposicion'>Anti Exposición</a>
                    <a href='#suck-my-type'>SuckMyType</a>
                </div>
            </MainContainer>
            <Section id='actividades'>
                <Container>
                    <h2 id='mesa-redonda'>Mesa Redonda</h2>
                    <Highlight contenido={contenido.mesaRedonda} />
                </Container>
                <Container>
                    <h2 id='anti-exposicion'>Anti Exposición</h2>
                    <Highlight
                        contenido={contenido.antiExposicion}
                        left={true}
                    />
                </Container>
                <Container>
                    <h2 id='suck-my-type'>SuCK my TYpe</h2>
                    <Highlight contenido={contenido.suckMyType} left={true} />
                </Container>
            </Section>
        </>
    );
}
