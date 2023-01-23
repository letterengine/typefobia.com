import classes from '@styles/ProgramaBody.module.css';

export const programHeader = [
    'Hora',
    'Actividades virtuales',
    'Actividades presenciales',
];

export const programaContent = {
    sabado: [
        {
            hora: '9:30',
            virtual: 'Bienvenida al evento',
            presencial: <td className={classes.cell} rowSpan='15'></td>,
        },
        { hora: '10:00', virtual: 'Rebeca Anaya' },
        { hora: '10:30', virtual: 'Rodrigo' },
        { hora: '11:00', virtual: 'Jess' },
        { hora: '11:30', virtual: '' },
        {
            hora: '12:00',
            virtual: (
                <td className={classes.cell} rowSpan='6'>
                    Así no se hace con Fer Cozzi
                </td>
            ),
        },
        { hora: '12:30' },
        { hora: '13:00' },
        { hora: '13:30' },
        { hora: '14:00' },
        { hora: '14:30' },
        {
            hora: '15:00',
            virtual: <td className={classes.cell} rowSpan='2'></td>,
        },
        { hora: '15:30' },
        { hora: '16:00', virtual: 'David' },
        {
            hora: '16:30',
            virtual: <td className={classes.cell} rowSpan='2'></td>,
        },
        {
            hora: '17:00',

            presencial: 'Inauguración de anti exposición',
        },
    ],
    domingo: [
        {
            hora: '10:00',
            virtual: (
                <td className={classes.cell} rowSpan='4'>
                    Mesa redonda
                </td>
            ),
            presencial: (
                <td className={classes.cell} rowSpan='6'>
                    Destruyendo una fuente con Python
                </td>
            ),
        },
        { hora: '10:30' },
        { hora: '11:00' },
        { hora: '11:30' },
        {
            hora: '12:00',
            virtual: <td className={classes.cell} rowSpan='18'></td>,
        },
        { hora: '12:30' },
        {
            hora: '13:00',
            presencial: <td className={classes.cell} rowSpan='3'></td>,
        },
        { hora: '13:30' },
        { hora: '14:00' },
        { hora: '14:30', presencial: 'Erika' },
        { hora: '15:00', presencial: 'Chris' },
        { hora: '15:30', presencial: '' },
        { hora: '16:00', presencial: 'Suck My Type' },
        { hora: '16:30', presencial: 'Eduardo' },
        { hora: '17:00', presencial: 'Alme' },
        { hora: '17:30', presencial: 'Mara' },
        { hora: '18:00', presencial: '' },
        {
            hora: '18:30',
            presencial: (
                <td className={classes.cell} rowSpan='3'>
                    Mesa redonda
                </td>
            ),
        },
        { hora: '19:00' },
        { hora: '19:30' },
        { hora: '20:00', presencial: 'Chelas & tipos' },
    ],
};
