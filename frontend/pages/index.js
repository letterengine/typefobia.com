import Head from 'next/head';
import contenido from '@content/indexContent';
// Components
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';
import Highlight from '@components/Layout/Highlight';

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
                <Highlight contenido={contenido.highlight} />
            </MainContainer>
            <Section id='info'>
                <Container>
                    <h3>Fecha</h3>
                    {contenido.fecha}
                </Container>
                <Container>
                    <h3>Locación</h3>
                    <h5>Musa Cultura Visual</h5>
                    <iframe {...contenido.musaMap} />
                </Container>
            </Section>
        </>
    );
}
