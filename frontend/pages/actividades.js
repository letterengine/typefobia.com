import { useState } from 'react';
import contenido from '@content/actividadesContent';
import AntiImage from '@assets/images/actividades/anti.svg';
import NodoImage from '@assets/images/actividades/nodo.svg';
import SuckImage from '@assets/images/actividades/suck.jpeg';
// Components
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import SubNav from '@components/UI/SubNav';
import Actividad from '@components/Layout/Actividad';

const subNavItems = [
        { href: '#mesa-redonda', label: 'Mesa Redonda', active: true },
        { href: '#anti-exposicion', label: 'Anti Exposición', active: false },
        { href: '#suck-my-type', label: 'SuCK my TYpe', active: false },
    ],
    imgSize = '300',
    actividades = {
        'mesa-redonda': {
            id: 'mesa-redonda',
            label: 'Mesa Redonda',
            img: NodoImage,
            contenido: contenido.mesaRedonda,
        },
        'anti-exposicion': {
            id: 'anti-exposicion',
            label: 'Anti Exposición',
            img: AntiImage,
            contenido: contenido.antiExposicion,
        },
        'suck-my-type': {
            id: 'suck-my-type',
            label: 'SuCK my TYpe',
            img: SuckImage,
            contenido: contenido.suckMyType,
        },
    };

export default function Actividades() {
    const [cact, setcAct] = useState(actividades['mesa-redonda']),
        [subNav, setSubnav] = useState([...subNavItems]),
        setCurrentHash = sel => {
            setcAct(actividades[sel]);
            setSubnav(
                subNavItems.map(el => {
                    return { ...el, active: el.href.includes(sel) };
                })
            );
        },
        handleSubnavClick = e => {
            window.location = `${document.location.pathname}#`;
            const anchor = e.target.href,
                selected = anchor.replace(/https?:\/\/[^#]+#/, '');
            setCurrentHash(selected);
        };
    return (
        <>
            <MainContainer>
                <h1>Actividades</h1>
                <SubNav
                    id='subnav-actividades'
                    links={subNav}
                    onClick={handleSubnavClick}
                />
            </MainContainer>
            <Section id='actividades'>
                <Actividad
                    key={cact.id}
                    id={cact.id}
                    label={cact.label}
                    width='auto'
                    height={imgSize}
                    img={cact.img}
                    contenido={cact.contenido}
                />
            </Section>
        </>
    );
}
