import { useContext } from 'react';
import { ModalContext } from '@store/modal-context';
import Link from 'next/link';
import classes from '@styles/Navbar.module.css';
import Button from '@components/UI/Button';

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
            <div className={classes.pages}>
                {menu.map((navEl, i) => (
                    <Link key={`nav-link-${i}`} href={navEl.url}>
                        {navEl.text}
                    </Link>
                ))}
            </div>
            <div className={classes.modals}>
                <Button onClick={handleClick}>Registro</Button>
                <Button onClick={handleClick}>Donar</Button>
            </div>
        </nav>
    );
}
