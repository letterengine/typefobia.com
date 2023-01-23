import classes from '@styles/ProgramaBody.module.css';

export default function ProgramaBody({ row }) {
    const createLocalHourString = hourString => {
        const [hours, minutes] = hourString.split(':'),
            date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        return date
            .toLocaleTimeString('es-MX', {
                hour12: false,
                timeStyle: 'short',
            })
            .padStart(5, '0');
    };

    console.log(row);

    return (
        <tr className={classes.row}>
            <td className={classes.hora}>{createLocalHourString(row.hora)}</td>
            <td className={classes.virtual}>{row.virtual}</td>
            <td className={classes.presencial}>{row.presencial}</td>
        </tr>
    );
}
