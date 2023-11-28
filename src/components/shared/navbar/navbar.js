"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteNavbarItem from "./site-navbar-item";

export default function SiteNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const routes = [
        {
            id: 1,
            label: "Home",
            href: "/",
        },
        {
            id: 2,
            label: "Team",
            href: "/team",
        },
        {
            id: 3,
            label: "Service",
            href: "/services",
        },
        {
            id: 2,
            label: "Projects",
            href: "/projects",
        },
        {
            id: 3,
            label: "Testmonials",
            href: "/testmonials",
        },
    ];

    return (
        <Navbar
            shouldHideOnScroll
            maxWidth="xl"
            onMenuOpenChange={setIsMenuOpen}
            className="fixed top-0"
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src="icons/logo.svg" width={155} height={60} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {routes.map(({ id, label, href }) => (
                    <SiteNavbarItem key={id} {...{ label, href }} />
                ))}
                <NavbarItem>
                    <Link
                        href="/login"
                        className="border-[1px] hover:border-[#16d261] duration-200 hover:text-[#16d261] border-[#20B15A] p-[10px] text-[16px] font-normal px-[20px] text-[#000] rounded-[10px]"
                    >
                        Login
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        href="/register"
                        className="bg-[#20B15A] text-white p-[10px] text-[16px] font-normal px-[20px] rounded-[10px] hover:bg-[#18c35c]"
                    >
                        Register
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <div className="space-y-3">
                    {routes.map(({ id, label, href }) => (
                        <SiteNavbarItem key={id} {...{ label, href }} />
                    ))}
                </div>
            </NavbarMenu>
        </Navbar>
    );
}
