/* eslint-disable @next/next/no-img-element */
import MobileTop from "./MobileTop";
import Link from "next/link";
import { headerMenu } from "./menuItems";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { buttonNoTurn, buttonPress } from "../utilities/animations";

const Header = ({ data }) => {
  return (
    <>
      <header className="z-50 fixed bottom-0 w-full sm:sticky sm:top-0 bg-primaryAccent sm:bg-offWhite/70 sm:dark:bg-darkestAccent/80 sm:backdrop-filter sm:backdrop-blur-lg sm:trasition sm:ease-in-out sm:duration-500 shadow-sm">
        <a className="skip-link screen-reader-text" href="#main-content">
          Skip to Content
        </a>
        <div className="lg:container mx-auto flex items-center justify-between">
          <div className="hidden sm:flex pl-2 items-center">
            <Logo />
            <p className="hidden md:block font-heading text-2xl">
              {data.acf.site_title}
            </p>
          </div>

          <nav className="w-full sm:w-auto sm:pr-6">
            <ul className="flex flex-nowrap items-center justify-evenly">
              {headerMenu.map((item) => (
                <motion.li
                  key={item.id}
                  className="inline-flex justify-center sm:block w-1/3 border-2 border-offBlack dark:border-offWhite border-y-4 sm:border-none"
                  whileHover={buttonNoTurn.hover}
                  whileTap={buttonNoTurn.tap}
                  initial={buttonNoTurn.initial}
                >
                  <Link href={item.href} passHref>
                    <a className="font-bold sm:font-normal text-offWhite sm:text-offBlack sm:dark:text-offWhite uppercase p-4 hover:underline decoration-primaryAccent dark:decoration-tertiaryAccent decoration-2	underline-offset-2 decoration-wavy">
                      {item.name}
                    </a>
                  </Link>
                </motion.li>
              ))}
              <li className="hidden sm:contents">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <MobileTop name={data.acf.site_title} />
    </>
  );
};

export default Header;
