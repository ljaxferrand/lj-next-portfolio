import Head from "next/head";

export default function Layout({ children }) {
  <>
    {/* <Head>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head> */}
    <main>{children}</main>;
  </>;
}
