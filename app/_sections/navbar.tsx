"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { showMenuToogled } from "../_redux/global-slice";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36" color="#C31B27">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function MainNavbar() {
  const state = useSelector((state: RootState) => state.globalState);
  const dispatch = useDispatch();

  const menuItems = ["Home", "Projects", "About", "Contact"];

  return (
    <Navbar
      onMenuOpenChange={() => dispatch(showMenuToogled(!state.showMenu))}
      className="bg-[#1A1A1A] sticky top-0 w-full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={state.showMenu ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-[#C31B27]">NICOLE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white uppercase text-sm"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            aria-current="page"
            href="#"
            className="text-white uppercase text-sm"
          >
            Projetcs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white uppercase text-sm"
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="flat"
            radius="none"
            className="text-white bg-[#C31B27] w-28"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
