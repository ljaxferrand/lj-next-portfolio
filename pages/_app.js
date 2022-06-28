import Layout from "../components/Layout";
import "../styles/globals.css";

// Motion
import { MotionConfig } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  );
}

export default MyApp;
