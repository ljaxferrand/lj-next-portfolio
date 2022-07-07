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
    <header className="z-50 sticky top-0 bg-offWhite dark:bg-gray-900 shadow-md">
      <a className="skip-link screen-reader-text" href="#main-content">
        Skip to Content
      </a>
      <div className="flex items-center justify-between">
        <div className="flex pl-2  items-center">
          <Link href="/">
            <motion.a
              whileTap={buttonPress.tap}
              whileHover={buttonPress.hover}
              initial={buttonPress.initial}
            >
              <Logo />
            </motion.a>
          </Link>
          <p className="font-heading text-2xl">{globalData.acf.site_title}</p>
        </div>

        <nav className="pr-6">
          <ul className="flex">
            {headerMenu.map((item) => (
              <li key={item.id} className="p-4">
                <Link href={item.href}>
                  <a className="uppercase p-4">{item.name}</a>
                </Link>
              </li>
            ))}
            <li className="">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
