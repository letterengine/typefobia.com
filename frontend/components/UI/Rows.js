import classes from '@styles/ProgramaBody.module.css';

export default function Rows({ rows }) {
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
        },
        tdTreatment = tdEl => {
            return typeof tdEl === 'string' ? (
                <td className={classes.cell}>{tdEl}</td>
            ) : tdEl === undefined ? null : (
                tdEl
            );
        };

    return (
        <tbody>
            {rows.map((row, i) => (
                <tr key={`td-${i}`} className={classes.row}>
                    <td className={classes.hora}>
                        {createLocalHourString(row.hora)}
                    </td>
                    {tdTreatment(row.virtual)}
                    {tdTreatment(row.presencial)}
                </tr>
            ))}
        </tbody>
    );
}
