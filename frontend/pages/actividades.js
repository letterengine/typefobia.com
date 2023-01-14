import contenido from '@content/actividadesContent';
// Components
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';
import Highlight from '@components/Layout/Highlight';
import SubNav from '@components/UI/SubNav';

const subNavItems = [
    { href: '#mesa-redonda', label: 'Mesa Redonda' },
    { href: '#anti-exposicion', label: 'Anti Exposición' },
    { href: '#suck-my-type', label: 'SuCK my TYpe' },
];

export default function Actividades() {
    return (
        <>
            <MainContainer>
                <h1>Actividades</h1>
                <SubNav id='subnav-actividades' links={subNavItems} />
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
