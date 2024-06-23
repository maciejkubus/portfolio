"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
          Astoria Star
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Strona główna
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Portfolio
        </Navbar.Link>
        <Navbar.Link href="#">Zespół</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">Kontakt</Navbar.Link>
        <Navbar.Link href="#">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                Bezpłatna wycena
            </button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
