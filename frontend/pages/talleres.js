import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';

export default function Talleres() {
    return (
        <>
            <MainContainer>
                <h1>Talleres</h1>
            </MainContainer>
            <Section id='talleres'>
                <Container>
                    <h2>Por confirmar</h2>
                </Container>
            </Section>
        </>
    );
}
