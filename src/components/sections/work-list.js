import { ArrowRight } from "lucide-react";
import Image from "next/image";
import icon1 from "../../../public/icons/activity.svg";
import icon2 from "../../../public/icons/heart.svg";
import icon3 from "../../../public/icons/work.svg";
import SectionTitle from "./section-title";

const WorkList = ({ data }) => {
    const workList = [
        {
            id: 1,
            icon: icon1,
            title: data[0]["title"],
            des: data[0]["des"],
        },
        {
            id: 2,
            icon: icon2,
            title: data[1]["title"],
            des: data[1]["des"],
        },
        {
            id: 3,
            icon: icon3,
            title: data[2]["title"],
            des: data[2]["des"],
        },
    ];
    return (
        <section className="section bg-white py-[67px]">
            <SectionTitle
                title="Work List"
                desc="We provide the Perfect Solution to your business growth"
            />
            <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[45px]">
                {workList.map(({ icon, id, title, des }) => {
                    return (
                        <div
                            className="px-[30px] py-[50px] border rounded-[20px]"
                            key={id}
                        >
                            <div className="bg-lightGreen p-[30px] rounded-[20px] w-fit">
                                <Image
                                    src={icon}
                                    width={30}
                                    height={30}
                                    alt="icon"
                                />
                            </div>
                            <h4 className="mt-[15px]">{title}</h4>
                            <p className="text-[18px] font-normal mt-[15px]">
                                {des}
                            </p>
                            <button className="mt-[43px] flex items-center group">
                                Learn More{" "}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:ml-3 duration-300" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WorkList;
