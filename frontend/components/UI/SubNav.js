import classes from '@styles/SubNav.module.css';

export default function SubNav({ id, links }) {
    return (
        <div className={classes['sub-nav']}>
            {links.map((link, i) => (
                <a key={`${id}-${i}`} href={link.href}>
                    {link.label}
                </a>
            ))}
        </div>
    );
}
