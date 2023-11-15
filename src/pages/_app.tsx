import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RootLayout } from './layout';
import { ReduxProvider } from '../store/provider';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ReduxProvider>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </ReduxProvider>
    );
}
