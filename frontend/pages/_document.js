import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
    return (
        <Html lang='es_MX'>
            <Head>
                <title>Typefobia</title>
                <meta
                    name='description'
                    content='Espacio anti académico cuyo objetivo es generar un pensamiento de contra cultura donde lo importante no es aprender si no valorar a las personas y lo ya aprendido.'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <body>
                <Main />
                <div id='backdrop-root' />
                <div id='overlay-root' />
                <NextScript />
            </body>
        </Html>
    );
}
