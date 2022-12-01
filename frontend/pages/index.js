import Head from 'next/head';
import classes from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={classes.container}>
            <Head>
                <title>Typefobia</title>
                <meta name='description' content='Anticongreso tipográfico' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={classes.main}>
                <h1>Typefobia</h1>
            </main>

            <footer className={classes.footer}>Typefobia 2023</footer>
        </div>
    );
}
