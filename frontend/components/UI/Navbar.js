import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '@store/modal-context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo.svg';
import classes from '@styles/Navbar.module.css';
import Button from '@components/UI/Button';

const menu = [
        { text: 'Home', url: '/' },
        { text: 'Programa', url: '/programa' },
        { text: 'Invitadxs', url: '/invitadxs' },
        { text: 'Talleres', url: '/talleres' },
        { text: 'Actividades', url: '/actividades' },
    ],
    menuBreakpoint = 800;

export default function Navbar() {
    const router = useRouter(),
        modalctx = useContext(ModalContext),
        [smallMenu, setSmallMenu] = useState(false),
        [menuOn, setMenuOn] = useState(false),
        handleClick = e => {
            modalctx.mountHandler();
            modalctx.setModal(e.target.textContent);
        },
        handleSmallMenu = () => {
            setMenuOn(prevMenuOn => !prevMenuOn);
        };

    useEffect(() => {
        setSmallMenu(window.innerWidth <= menuBreakpoint);
        setMenuOn(window.innerWidth > menuBreakpoint);
    }, []);

    useEffect(() => {
        const windowWidthUpdate = () => {
            const newWidth = window.innerWidth;
            setSmallMenu(newWidth <= menuBreakpoint);
            setMenuOn(newWidth > menuBreakpoint);
        };
        window.addEventListener('resize', windowWidthUpdate);
        return () => window.removeEventListener('resize', windowWidthUpdate);
    }, []);

    return (
        <nav className={classes.nav}>
            <div className={classes.menu}>
                <Image
                    src={Logo}
                    alt='Typefobia Logo'
                    width={150}
                    height={150}
                />
                {smallMenu ? (
                    <h3
                        className={classes['menu-button']}
                        onClick={handleSmallMenu}
                    >
                        MENÚ
                    </h3>
                ) : null}
                <div
                    className={`${classes.pages} ${
                        !menuOn && smallMenu ? classes.hide : ''
                    }`.trim()}
                >
                    {menu.map((navEl, i) => (
                        <Link
                            className={
                                router.pathname === navEl.url
                                    ? classes['menu-active']
                                    : ''
                            }
                            key={`nav-link-${i}`}
                            href={navEl.url}
                        >
                            {navEl.text}
                        </Link>
                    ))}
                    {smallMenu ? (
                        <Button onClick={handleSmallMenu}>Cerrar</Button>
                    ) : null}
                </div>
            </div>
            <div className={classes.modals}>
                <Button onClick={handleClick}>Newsletter</Button>
                <Button onClick={handleClick}>Donar</Button>
            </div>
        </nav>
    );
}
