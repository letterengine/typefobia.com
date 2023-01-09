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
                </div>
            </MainContainer>
            <Section id='talleres'>
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
            </Section>
        </>
    );
}
