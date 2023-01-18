import talleresContent from '@content/talleresContent';
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';
import Taller from '@components/Layout/Taller';
import SubNav from '@components/UI/SubNav';
import { useState } from 'react';

const subNavItems = [
        { href: '#virtuales', label: 'Virtuales', active: true },
        { href: '#presenciales', label: 'Presenciales', active: false },
    ],
    talleres = {
        virtuales: (
            <Container id='virtuales'>
                <h2>Virtuales</h2>
                {Object.values(talleresContent.virtuales).map((taller, i) => (
                    <Taller key={`t-virtuales-${i}`} {...taller} />
                ))}
            </Container>
        ),
        presenciales: (
            <Container id='presenciales'>
                <h2>Presenciales</h2>
                {Object.values(talleresContent.presenciales).map(
                    (taller, i) => (
                        <Taller key={`t-sitio-${i}`} {...taller} />
                    )
                )}
            </Container>
        ),
    };

export default function Talleres() {
    const [sel, setSel] = useState(talleres.virtuales),
        [subNav, setSubnav] = useState([...subNavItems]),
        handleSubnavClick = e => {
            e.preventDefault()
            const anchor = e.target.href,
                selected = anchor.replace(/https?:\/\/[^#]+#/, '');
            setSel(talleres[selected]);
            setSubnav(
                subNavItems.map(el => {
                    return { ...el, active: el.href.includes(selected) };
                })
            );
        };
    return (
        <>
            <MainContainer>
                <h1>Talleres</h1>
                <SubNav
                    id='subnav-talleres'
                    links={subNav}
                    onClick={handleSubnavClick}
                />
            </MainContainer>
            <Section id='talleres'>{sel}</Section>
        </>
    );
}
