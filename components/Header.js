/* eslint-disable @next/next/no-img-element */
import globalData from "../utilities/globalData.preval";
import Link from "next/link";
import { headerMenu } from "./menuItems";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { buttonPress } from "../utilities/animations";

const Header = () => {
  return (
    <header className="z-50 fixed bottom-0 w-full sm:sticky sm:top-0 bg-primaryAccent sm:bg-offWhite/70 sm:dark:bg-darkestAccent/80 sm:backdrop-filter sm:backdrop-blur-lg sm:trasition sm:ease-in-out sm:duration-500 shadow-sm">
      <a className="skip-link screen-reader-text" href="#main-content">
        Skip to Content
      </a>
      <div className="lg:container mx-auto flex items-center justify-between">
        <div className="hidden sm:flex pl-2 items-center">
          <Link href="/">
            <motion.a
              whileTap={buttonPress.tap}
              whileHover={buttonPress.hover}
              initial={buttonPress.initial}
            >
              <Logo />
            </motion.a>
          </Link>
          <p className="hidden md:block font-heading text-2xl">
            {globalData.acf.site_title}
          </p>
        </div>

        <nav className="w-full sm:w-auto sm:pr-6">
          <ul className="flex flex-nowrap items-center justify-evenly">
            {headerMenu.map((item) => (
              <li
                key={item.id}
                className="inline-flex justify-center sm:block w-1/3 border-2 border-offBlack dark:border-offWhite border-y-4 sm:border-none"
              >
                <Link href={item.href}>
                  <a className="font-bold sm:font-normal text-offWhite sm:text-offBlack sm:dark:text-offWhite uppercase p-4">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
            <li className="hidden sm:contents">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
