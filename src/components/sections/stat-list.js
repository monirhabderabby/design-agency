"use client";
// count up

//intersection observer hook
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import likeIcon from "../../../public/icons/Like.svg";
import groupIcon from "../../../public/icons/group-people.svg";
import happyIcon from "../../../public/icons/happy.svg";
import scanIcon from "../../../public/icons/scan.svg";

const StatList = ({ data }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
    });
    const statData = [
        {
            id: 1,
            title: "Followers",
            value: data["followers"],
            icon: groupIcon,
        },
        {
            id: 2,
            title: "Solved Problems",
            value: data["solved"],
            icon: likeIcon,
        },
        {
            id: 3,
            title: "Happy Customers",
            value: data["customers"],
            icon: happyIcon,
        },
        {
            id: 4,
            title: "Projects",
            value: data["projects"],
            icon: scanIcon,
        },
    ];
    return (
        <section className="section py-[67px] grid grid-cols-1 md:grid-cols-4 gap-[29px]">
            {statData.map(({ icon, id, value, title }) => {
                return (
                    <div
                        ref={ref}
                        key={id}
                        className="w-full md:max-w-[288px] px-[50px] py-[46px]  flex flex-col justify-center items-center gap-[23px] rounded-[20px] shadow-[4px_9px_20px_0px_rgba(0,0,0,0.07)]"
                    >
                        <div className="bg-lightGreen p-[35px] rounded-[20px] w-fit ">
                            <Image
                                src={icon}
                                width={40}
                                height={40}
                                alt="logo"
                            />
                        </div>
                        <h4>{value}</h4>
                        <p className="text-center">{title}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default StatList;
