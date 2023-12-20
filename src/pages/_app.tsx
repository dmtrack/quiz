import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import RootLayout from './layout';
import { ReduxProvider } from '../store/provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo title='city_quiz' description='this is fun game!' />
      <ReduxProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ReduxProvider>
    </>
  );
}
