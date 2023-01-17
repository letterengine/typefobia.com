import Link from 'next/link';
import classes from '@styles/SubNav.module.css';

export default function SubNav({ id, links, onClick }) {
    return (
        <div className={classes['sub-nav']}>
            {links.map((link, i) => (
                <div
                    className={link.active ? classes.active : ''}
                    key={`${id}-${i}`}
                    onClick={onClick}
                >
                    <Link href={link.href} legacyBehavior>
                        {link.label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
