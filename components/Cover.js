/* eslint-disable @next/next/no-img-element */
import WaveDivider from "./WaveDivider";

const Cover = ({ title, description }) => {
  return (
    <>
      <section className="text-white bg-primaryDarker">
        <div className="max-w-screen-xl px-4 py-12 mx-auto lg:h-60 lg:items-center lg:flex ">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400">
              {title}
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              {description}
            </p>
          </div>
        </div>
      </section>
      <WaveDivider />
    </>
  );
};

export default Cover;
