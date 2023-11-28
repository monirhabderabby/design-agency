import Image from "next/image";
import SectionTitle from "./section-title";

const AllServices = () => {
    const arr = [1, 2, 3, 4];
    return (
        <div className="section py-[67px]">
            <SectionTitle
                title="OUR ALL SERVICES"
                desc="We Provide BestWeb design services"
            />

            <section className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[55px]">
                {arr.map((item) => (
                    <div
                        className="rounded-[20px] w-full shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] py-[40px] px-[20px] md:px-[34px] relative"
                        key={item}
                    >
                        <h4 className="text-[26px]">
                            Build & Launch without problems
                        </h4>
                        <p className="mt-[20px]">
                            Increase your team’s productivity and save time with
                            a bot that answers and fields customer inquiries
                        </p>
                        <div className="grid grid-cols-12 mt-[54px] gap-[12px] md:gap-[33px]">
                            <div className="relative col-span-8 h-[90px] md:h-[164px]">
                                <Image
                                    src="https://agency.teamrabbil.com/files/601441dd6dfbe10018e00c25.webp"
                                    fill
                                    alt="img"
                                    className="rounded-[10px]"
                                />
                            </div>
                            <div className="relative col-span-4 h-[90px] md:h-[164px]">
                                <Image
                                    src="https://agency.teamrabbil.com/files/601441dd6dfbe10018e00c25.webp"
                                    fill
                                    alt="img"
                                    className="rounded-[10px]"
                                />
                            </div>
                            <div className="relative col-span-6 h-[120px] md:h-[263px]">
                                <Image
                                    src="https://agency.teamrabbil.com/files/601441dd6dfbe10018e00c25.webp"
                                    fill
                                    alt="img"
                                    className="rounded-[10px]"
                                />
                            </div>
                            <div className="relative col-span-6 h-[120px] md:h-[263px]">
                                <Image
                                    src="https://agency.teamrabbil.com/files/601441dd6dfbe10018e00c25.webp"
                                    fill
                                    alt="img"
                                    className="rounded-[10px]"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AllServices;
