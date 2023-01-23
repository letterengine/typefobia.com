import { useState } from 'react';
import { charlasContent } from '@content/charlasContent';
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';
import Highlight from '@components/Layout/Highlight';
import SubNav from '@components/UI/SubNav';
import Charla from '@components/Layout/Charla';

const subNavItems = [
    { href: '#virtuales', label: 'Virtuales', active: true },
    { href: '#presenciales', label: 'Presenciales', active: false },
];

export default function Charlas() {
    const [sel, setSel] = useState(charlasContent.virtuales),
        [subNav, setSubnav] = useState([...subNavItems]),
        handleSubnavClick = e => {
            e.preventDefault();
            const anchor = e.target.href,
                selected = anchor.replace(/https?:\/\/[^#]+#/, '');
            setSel(charlasContent[selected]);
            setSubnav(
                subNavItems.map(el => {
                    return { ...el, active: el.href.includes(selected) };
                })
            );
        };
    return (
        <>
            <MainContainer>
                <h1>Charlas</h1>
                <Highlight contenido={charlasContent.intro} />
            </MainContainer>
            <Section id='charlas'>
                <SubNav
                    id='subnav-charlas'
                    links={subNav}
                    onClick={handleSubnavClick}
                />
                <Container>
                    {sel.map((charla, i) => (
                        <Charla key={`charla-${i}`} charla={charla} />
                    ))}
                </Container>
            </Section>
        </>
    );
}
