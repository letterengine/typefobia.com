import hClasses from '@styles/Highlight.module.css';

const indexContent = {
    highlight: (
        <>
            <p>
                Typefobia es el anti congreso tipográfico donde ofreceremos
                contenido irresponsable sobre la <em>«cultura»</em> del diseño
                de letras, tenemos el desinterés de ofrecer contenido
                responsable para enriquecer las academias y el ego que se
                encuentra dentro de la profesión.
            </p>
            <p>
                El aprendizaje se da gracias a la sátira entre lo convergente y
                divergente, es por esto que el anti congreso se desmitifica a
                través de distintas actividades la palabra tipografía.
            </p>
        </>
    ),
    precios: (
        <>
            <p>
                Chelas y Tipos e inauguración de la AntiExpo:{' '}
                <strong>Entrada libre</strong>
            </p>
            <div className={hClasses.precios}>
                <h4>Básicos</h4>
                <ul>
                    <li>
                        Virtual <span>$100</span>
                    </li>
                    <li>
                        Presencial <span>$150</span>
                    </li>
                    <li>
                        Todo Junto (Virtual y presencial) <span>$200</span>
                    </li>
                </ul>
                <h4>Extras</h4>
                <ul>
                    <li>
                        1 taller <span>$350</span>
                    </li>
                    <li>
                        2 talleres <span>$500</span>
                    </li>
                    <li>
                        Un boleto de Rifa <span>$120</span>
                    </li>
                </ul>
                <h4>All Inclusive</h4>
                <ul>
                    <li>
                        Presencial y virtual con 2 talleres <span>$600</span>
                    </li>
                </ul>
            </div>
            <p>
                <em>
                    Precios en peso mexicano (MXN), no incluyen consumo en Musa
                </em>
            </p>
        </>
    ),
    inscripcion: (
        <>
            <h4>
                Formulario de inscripción{' '}
                <a href='https://forms.gle/TjwjJwcB1bYtcyqSA' target='blank'>
                    (Clic aquí)
                </a>
            </h4>
            <p>
                Para poder asistir a las actividades con costo de Typefobia es
                necesario llenar el formulario de registro después de haber
                pagado.
            </p>

            <p>
                Puedes hacer el pago a través de paypal o crypto directamente en
                el apartado de donaciones de nuestra página, o de la forma
                tradicional con los siguientes datos:
            </p>
            <div className='code-block'>
                <code>
                    <strong>Cuenta HSBC:</strong> 6423514565
                </code>
                <code>
                    <strong>CLABE:</strong> 021650064235145655
                </code>
                <code>
                    <strong>Nº de Tarjeta:</strong> 4213166108552062
                </code>
            </div>
        </>
    ),
    fecha: <h5>4 y 5 de febrero del 2023.</h5>,
    musaMap: {
        style: { border: 0, boxShadow: '1rem 1rem' },
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4847572484755!2d-98.1928851!3d19.0424128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0dd11a2c8a5%3A0x7fcf0493a0d8b004!2sMUSA%20Cultura%20Visual!5e0!3m2!1ses-419!2smx!4v1673241713008!5m2!1ses-419!2smx',
        width: '100%',
        height: '450',
        allow: 'fullscreen',
        loading: 'lazy',
        referrerPolicy: 'no-referrer-when-downgrade',
    },
};

export default indexContent;
