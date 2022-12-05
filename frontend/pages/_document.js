import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
    return (
        <Html lang='es_MX'>
            <Head />
            <body>
                <Main />
                <div id='backdrop-root' />
                <div id='overlay-root' />
                <NextScript />
            </body>
        </Html>
    );
}
