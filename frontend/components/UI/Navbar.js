import { useContext } from 'react';
import { ModalContext } from '../../store/modal-context';
import classes from '../../styles/Navbar.module.css';
// Components
import Link from 'next/link';
import Button from '../UI/Button';

const menu = [
    { text: 'Home', url: '/' },
    { text: 'Charlas', url: '/charlas' },
    { text: 'Talleres', url: '/talleres' },
    { text: 'Actividades', url: '/actividades' },
];

export default function Navbar() {
    const modalctx = useContext(ModalContext);
    const handleClick = e => {
        modalctx.mountHandler();
        modalctx.setModal(e.target.textContent);
    };
    return (
        <nav className={classes.nav}>
            {menu.map((navEl, i) => (
                <Link key={`nav-link-${i}`} href={navEl.url}>
                    {navEl.text}
                </Link>
            ))}
            <Button onClick={handleClick}>Donar</Button>
            <Button onClick={handleClick}>Registro</Button>
        </nav>
    );
}
