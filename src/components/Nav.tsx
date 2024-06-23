"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["navbar"] = {
  collapse: {
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium items-center",
  },
};

export function Nav() {
  return (
    <Navbar fluid rounded theme={customTheme}>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
          Astoria Star
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">
          <Button color="light" pill>
            Light
          </Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
