import React, { PropsWithChildren } from "react";
import Head from "next/head";

interface SEOProps extends PropsWithChildren {
  title?: string;
}

const SEO = ({ title, children }: SEOProps) => {
  return (
    <Head>
      <title>{`${title ? `${title} | CafeOne Admin` : "CafeOne Admin"}`}</title>
      {children}
    </Head>
  );
};
export default SEO;
