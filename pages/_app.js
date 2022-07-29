import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import { eggie, style, message } from "../utilities/easterEgg";

function MyApp({ Component, pageProps }) {
  console.log(eggie);
  console.log(message, style);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
