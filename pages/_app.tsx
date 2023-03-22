import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GA_TRACKING_ID } from "../libs/gtag";

const isProduction = true;

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      { isProduction && (<>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </>)}
      <Component {...pageProps} />
    </>
  )
}
