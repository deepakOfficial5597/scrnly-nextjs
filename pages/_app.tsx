import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useRouter } from "next/router";

const isProduction = process.env.NODE_ENV === "production";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";


if (typeof window !== 'undefined' && isProduction) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "dummy", {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    }
  })
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  const tagManagerArgs: TagManagerArgs = {
    gtmId: GTM_ID,
  };

  useEffect(() => {
    if (isProduction) {
      TagManager.initialize(tagManagerArgs);
      const handleRouteChange = () => posthog?.capture("$pageview");
      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <Component {...pageProps} />
    </PostHogProvider>
  );
}
