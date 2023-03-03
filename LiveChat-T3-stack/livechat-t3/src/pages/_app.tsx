import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { httpBatchLink} from '@trpc/client/links/httpBatchLink';
import { wsLink, createWSClient } from '@trpc/client/links/wsLink';

import { api } from "livechat/utils/api";

import "livechat/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  links: [], // Added + line 18 <Components>
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component links {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
