/* eslint-disable @next/next/no-img-element */
import globalData from "../utilities/globalData.preval";
import Link from "next/link";

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
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
