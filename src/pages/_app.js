import { Ubuntu } from 'next/font/google';
import '@/styles/globals.scss';
import 'css-shortcut';

const ubuntu = Ubuntu({ weight: ['400', '500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <div className={ubuntu.className}>
            <Component {...pageProps} />
        </div>
    );
}
