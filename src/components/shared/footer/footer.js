import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinksRoutes = [
    {
        id: 1,
        label: "Services",
        href: "/services",
    },
    {
        id: 2,
        label: "Portfolio",
        href: "/portfolio",
    },
    {
        id: 3,
        label: "About Us",
        href: "/about",
    },
    {
        id: 4,
        label: "Contact Us",
        href: "/contact",
    },
];

const Footer = () => {
    return (
        <div className="w-full py-[29px] text-[#FFF] bg-[#000]">
            <section className="section grid grid-cols-1 md:grid-cols-3 space-y-12 md:space-y-0">
                <div className="flex flex-col space-y-[20px]">
                    <Image
                        width={155}
                        height={70}
                        src="icons/logoWhite.svg"
                        alt="logo"
                    />
                    <p className="text-white text-[20px] font-normal max-w-[328px]">
                        Some footer text about the Agency. Just a little
                        description to help people understand you better
                    </p>
                    <div className="flex flex-wrap gap-[15px]">
                        <div className="bg-siteGreen p-3 rounded-full hover:bg-softGreen cursor-pointer">
                            <Facebook className="w-4 h-4" />
                        </div>
                        <div className="bg-siteGreen p-3 rounded-full hover:bg-softGreen cursor-pointer">
                            <Twitter className="w-4 h-4" />
                        </div>
                        <div className="bg-siteGreen p-3 rounded-full hover:bg-softGreen cursor-pointer">
                            <Linkedin className="w-4 h-4" />
                        </div>
                        <div className="bg-siteGreen p-3 rounded-full hover:bg-softGreen cursor-pointer">
                            <Instagram className="w-4 h-4" />
                        </div>
                    </div>
                </div>
                <div className="md:mx-auto">
                    <h6 className="text-white">Quick Links</h6>
                    <ul className="mt-[16px] space-y-[25px]">
                        {quickLinksRoutes.map(({ id, label, href }) => (
                            <li
                                key={id}
                                className="hover:translate-x-2 duration-300"
                            >
                                <Link
                                    className="text-[18px] font-maven "
                                    href={href}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:mx-auto">
                    <h6 className="text-white">Address</h6>
                    <div className="mt-[26px]">
                        <h6 className="text-white font-medium font-maven">
                            Design Agency Head Office.
                        </h6>
                        <h6 className="text-white font-medium font-maven">
                            Airport Road
                        </h6>
                        <h6 className="text-white font-medium font-maven">
                            United Arab Emirate
                        </h6>
                    </div>
                </div>
            </section>
            <h6 className="text-white font-light section mt-[90px]">
                Copyright Design Agency 2022
            </h6>
        </div>
    );
};

export default Footer;
