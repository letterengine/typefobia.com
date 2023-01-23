import { useState } from 'react';
import { programHeader, programaContent } from '@content/programaContent';
import MainContainer from '@components/Containers/MainContainer';
import SubNav from '@components/UI/SubNav';
import Section from '@components/Containers/Section';
import Rows from '@components/UI/Rows';
import classes from '@styles/ProgramaBody.module.css';
import Container from '@components/Containers/Container';

const subNavItems = [
    { href: '#sabado', label: 'Sábado', active: true },
    { href: '#domingo', label: 'Domingo', active: false },
];

export default function Programa() {
    const [content] = useState({ ...programaContent }),
        [sel, setSel] = useState(content.sabado),
        [subNav, setSubnav] = useState([...subNavItems]),
        handleSubnavClick = e => {
            e.preventDefault();
            const anchor = e.target.href,
                selected = anchor.replace(/https?:\/\/[^#]+#/, '');
            setSel(content[selected]);
            setSubnav(
                subNavItems.map(el => {
                    return { ...el, active: el.href.includes(selected) };
                })
            );
        };
    return (
        <>
            <MainContainer>
                <h1>Programa</h1>
                <SubNav
                    id='subnav-talleres'
                    links={subNav}
                    onClick={handleSubnavClick}
                />
            </MainContainer>
            <Section id='programa'>
                <Container>
                    <div className={classes['table-wrapper']}>
                        <table className={classes.table}>
                            <thead className={classes.header}>
                                <tr>
                                    {programHeader.map((el, i) => (
                                        <th
                                            className={classes['header-col']}
                                            key={`th-${i}`}
                                        >
                                            {el}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <Rows rows={sel} />
                        </table>
                    </div>
                </Container>
            </Section>
        </>
    );
}
