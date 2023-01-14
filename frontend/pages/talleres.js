import talleresContent from '@content/talleresContent';
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';
import Taller from '@components/Layout/Taller';
import SubNav from '@components/UI/SubNav';

const subNavItems = [
    { href: '#virtuales', label: 'Virtuales' },
    { href: '#presenciales', label: 'Presenciales' },
];

export default function Talleres() {
    return (
        <>
            <MainContainer>
                <h1>Talleres</h1>
                <SubNav id='subnav-talleres' links={subNavItems} />
            </MainContainer>
            <Section id='talleres'>
                <Container id='virtuales'>
                    <h2>Virtuales</h2>
                    {Object.values(talleresContent.virtuales).map(
                        (taller, i) => (
                            <Taller key={`t-virtuales-${i}`} {...taller} />
                        )
                    )}
                </Container>
                <Container id='presenciales'>
                    <h2>Presenciales</h2>
                    {Object.values(talleresContent.presenciales).map(
                        (taller, i) => (
                            <Taller key={`t-sitio-${i}`} {...taller} />
                        )
                    )}
                </Container>
            </Section>
        </>
    );
}
