import Image from "next/image";
import Link from "next/link";

import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";

import MainHeaderBackground from "./main-header-background";
import NavLink from "@/components/nav-link/nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logoImg} alt="A picture of food dish" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainHeader;
