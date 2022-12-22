import "../styles/globals.css";
import "../node_modules/react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import useGoBack from "@hooks/useGoBack";
import { NextPageWithLayout } from "@utils/types/types";
import { redirect } from "next/dist/server/api-utils";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { monitorPath } = useGoBack();

  useEffect(() => {
    monitorPath();
  }, [monitorPath]);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
