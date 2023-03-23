import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import TagManager, {TagManagerArgs} from 'react-gtm-module'

const isProduction = process.env.NODE_ENV === "production";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ""
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  
  const tagManagerArgs:TagManagerArgs = {
    gtmId: GTM_ID
  }

  useEffect(()=>{
    if(isProduction) TagManager.initialize(tagManagerArgs)
  },[])

  return (
    <Component {...pageProps} />
  )
}
