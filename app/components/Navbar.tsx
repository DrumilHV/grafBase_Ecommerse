import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { NavLinks } from "../constants";
const Navbar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar ">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexibel" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        {session ? (
          <>
            userPhoto <Link href={"/create-project"}>Share work</Link>
          </>
        ) : (
          <>
            <AuthProviders />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
