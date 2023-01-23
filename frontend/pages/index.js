import Head from 'next/head';
import contenido from '@content/indexContent';
// Components
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';
import Highlight from '@components/Layout/Highlight';
import SubNav from '@components/UI/SubNav';

const subNavItems = [
    { href: '#precios', label: 'Precios' },
    { href: '#inscripcion', label: 'Inscripción' },
    { href: '#locacion', label: 'Locación' },
];

export default function Home() {
    return (
        <>
            <Head>
                <title>Typefobia</title>
                <meta
                    name='description'
                    content='Espacio anti académico cuyo objetivo es generar un pensamiento de contra cultura donde lo importante no es aprender si no valorar a las personas y lo ya aprendido.'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <MainContainer>
                <h1>Typefobia</h1>
                <Highlight contenido={contenido.fecha} />
                <Highlight contenido={contenido.highlight} />
            </MainContainer>
            <Section id='info'>
                <SubNav id='subnav-home' links={subNavItems} />
                <Container id='precios'>
                    <h3>Precios</h3>
                    <Highlight contenido={contenido.precios} />
                </Container>
                <Container id='inscripcion'>
                    <h3>Inscripción</h3>
                    <Highlight contenido={contenido.inscripcion} />
                </Container>
                <Container id='locacion'>
                    <h3>Locación</h3>
                    <Highlight contenido={[<h4>Musa Cultura Visual</h4>]} />
                    <iframe
                        style={{ border: 0, boxShadow: '1rem 1rem' }}
                        {...contenido.musaMap}
                    />
                </Container>
            </Section>
        </>
    );
}
