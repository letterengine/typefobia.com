import { useState } from 'react';
import { programaContent } from '@content/programaContent';
import MainContainer from '@components/Containers/MainContainer';
import SubNav from '@components/UI/SubNav';

const subNavItems = [
    { href: '#sabado', label: 'Sábado', active: true },
    { href: '#domingo', label: 'Domingo', active: false },
];

export default function Programa() {
    const [sel, setSel] = useState(programaContent.sabado),
        [subNav, setSubnav] = useState([...subNavItems]),
        handleSubnavClick = e => {
            e.preventDefault();
            const anchor = e.target.href,
                selected = anchor.replace(/https?:\/\/[^#]+#/, '');
            setSel(programaContent[selected]);
            setSubnav(
                subNavItems.map(el => {
                    return { ...el, active: el.href.includes(selected) };
                })
            );
        };
    return (
        <MainContainer>
            <h1>Programa</h1>
            <SubNav
                id='subnav-talleres'
                links={subNav}
                onClick={handleSubnavClick}
            />
        </MainContainer>
    );
}
