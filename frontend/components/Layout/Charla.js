import Image from 'next/image';
import classes from '@styles/Charla.module.css';

export default function Charla({ charla }) {
    return (
        <div className={classes.presenter}>
            <div className={classes.wrapper}>
                <Image
                    alt={charla.presenter}
                    width='500'
                    height='500'
                    src={charla.img}
                />
            </div>
            <div className={classes.content}>
                <h6>{charla.presenter}</h6>
                {charla.about.map((pg, i) => (
                    <p key={`charla-p${i}`}>{pg}</p>
                ))}
            </div>
        </div>
    );
}
