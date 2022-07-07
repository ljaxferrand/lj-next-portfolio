/* eslint-disable @next/next/no-img-element */
const Cover = ({ title, description }) => {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-60 lg:items-center lg:flex ">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600">
            {title}
          </h1>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cover;
