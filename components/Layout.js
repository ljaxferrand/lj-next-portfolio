import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer text={"Want to work together?"} btnText={"Let's Connect!"} />
    </>
  );
}
