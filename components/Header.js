/* eslint-disable @next/next/no-img-element */
import globalData from "../utilities/globalData.preval";
import Link from "next/link";
import { headerMenu } from "./menuItems";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <img
            className="p-4 w-24"
            src={globalData.acf.logo.url}
            alt={globalData.acf.logo.url}
          />
        </a>
      </Link>

      <nav>
        <ul>
          {headerMenu.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
