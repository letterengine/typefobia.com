import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import classes from '@styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <p>Typefobia 2023</p>
            <span className={classes.icons}>
                <a href='https://instagram.com/typefobia' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} color='var(--bg)' />
                </a>
                <a href='https://www.tiktok.com/@typefobia' target='_blank'>
                    <FontAwesomeIcon icon={faTiktok} color='var(--bg)' />
                </a>
            </span>
        </footer>
    );
}
