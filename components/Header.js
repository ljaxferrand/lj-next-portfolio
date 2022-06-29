/* eslint-disable @next/next/no-img-element */
import globalData from "../utilities/globalData.preval";
import Link from "next/link";
import { headerMenu } from "./menuItems";

const Header = () => {
  return (
    <header>
      <a className="skip-link screen-reader-text" href="#main-content">
        Skip to Content
      </a>
      <div className="flex items-center justify-between">
        <div className="flex pl-4 items-center">
          <Link href="/">
            <a>
              <img
                className="p-4 w-24"
                src={globalData.acf.logo.url}
                alt={globalData.acf.logo.url}
              />
            </a>
          </Link>
          <p className="font-heading text-2xl">{globalData.acf.site_title}</p>
        </div>

        <nav className="pr-4">
          <ul className="flex">
            {headerMenu.map((item) => (
              <li key={item.id} className="p-4">
                <Link href={item.href}>
                  <a className="uppercase">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
