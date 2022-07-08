import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkestAccent">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-4 p-6 bg-tertiaryAccent rounded-lg shadow-lg sm:flex-row sm:justify-between">
            <strong className="text-xl text-white sm:text-xl">
              Make Your Next Career Move!
            </strong>

            <Link href="/contact">
              <a className="inline-flex items-center px-8 py-3 text-indigo-600 bg-white border border-white rounded-full hover:bg-transparent hover:text-white active:bg-white/90 focus:outline-none focus:ring">
                <span className="text-sm font-medium">
                  {" "}
                  Let&apos;s Get Started{" "}
                </span>

                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeLidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Link>
          </div>

          <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
