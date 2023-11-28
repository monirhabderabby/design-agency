"use client";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteNavbarItem = ({ href, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <NavbarItem
            isActive={isActive}
            className=" py-1 px-4 hover:text-[#000]"
        >
            <Link color="foreground" href={href}>
                {label}
            </Link>
        </NavbarItem>
    );
};

export default SiteNavbarItem;
