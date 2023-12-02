import { Sidebar } from '@/components/sidebar/Sidebar';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next Dashboard</title>
                <meta name='description' content='Fancy Finance Tracker' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className='container'>
                    <Sidebar />
                </div>
            </main>
        </>
    );
}
