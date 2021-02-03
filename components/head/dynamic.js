import React from "react";
import Head from "next/head";

const Dynamic = (props) => {
  return (
    <Head>
      <title>Choc UI - {props.title}</title>

      <meta name="title" content={`Choc UI - ${props.title}`} />
      <meta name="description" content={`${props.title}`} />

      <meta property="og:title" content={`Choc UI - ${props.title}`} />
      <meta property="twitter:title" content={`Choc UI - ${props.title}`} />
      <meta property="og:description" content={`${props.title}`} />
      <meta property="twitter:description" content={`${props.title}`} />
      <meta
        property="og:image"
        content={
          `${process.env.siteUrl}/thumbnails/` + (props.image || "logo.png")
        }
      />
      <meta
        property="twitter:image"
        content={
          `${process.env.siteUrl}/thumbnails/` + (props.image || "logo.png")
        }
      />
    </Head>
  );
};

export default Dynamic;
