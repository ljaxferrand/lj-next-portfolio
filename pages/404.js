/* eslint-disable @next/next/no-img-element */
import Cover from "../components/Cover";

const Custom404 = () => {
  return (
    <>
      <div id="main-content">
        <Cover title={"Error: 404"} description={"Page not Found!"} />
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
          <p className="max-w-md p-4 text-3xl lg:order-2">
            I might have fallen asleep before publishing the page you are
            looking for. Try heading back to the home page!
          </p>
          <img
            className="px-4 pt-4 pb-12 lg:pt-0"
            src="../images/sleeping-at-the-desk.png"
            alt=""
          />
        </div>
      </div>
      <aside className="text-center p-4">
        Illustration by{" "}
        <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
          Icons 8
        </a>{" "}
        from <a href="https://icons8.com/illustrations">Ouch!</a>
      </aside>
    </>
  );
};

export default Custom404;
