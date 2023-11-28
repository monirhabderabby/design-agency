import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./section-title";

const Team = ({ data }) => {
    return (
        <div className="section py-[67px]">
            <SectionTitle
                title="Our Team Member"
                desc="Check our awesome team members"
            />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[66px]">
                {data.map(
                    ({ id, image, name, facebook, twitter, instagram }) => (
                        <div
                            key={id}
                            className="h-[490px] rounded-[20px] border border-[#E3E3E3] shadow-[0px_4.4px_20px_-1px_rgba(19,16,34,0.05)]"
                        >
                            <div className="h-[387px] w-full relative overflow-hidden group">
                                <Image
                                    src={image}
                                    fill
                                    alt="profile"
                                    className="rounded-tl-[20px] rounded-tr-[20px] z-10"
                                />
                                <div
                                    className="rounded-[25px] absolute -bottom-[100px] left-1/2 z-50 bg-white h-[50px] min-w-[145px] flex items-center justify-around group-hover:bottom-4 duration-300"
                                    style={{
                                        transform: "translate(-50%,-50%)",
                                    }}
                                >
                                    <div className="mx-auto">
                                        <a href={facebook} target="_facebook">
                                            <Facebook className="w-4 h-4 cursor-pointer hover:scale-105" />
                                        </a>
                                    </div>
                                    <div className="w-[1px] h-1/2 bg-black/10"></div>
                                    <div className="mx-auto">
                                        <a href={twitter} target="_twitter">
                                            <Twitter className="w-4 h-4 cursor-pointer hover:scale-105" />
                                        </a>
                                    </div>
                                    <div className="w-[1px] h-1/2 bg-black/10"></div>
                                    <div className="mx-auto">
                                        <a href={instagram} target="_blank">
                                            <Instagram className="w-4 h-4 cursor-pointer hover:scale-105" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[calc(490px-387px)] flex items-center justify-center">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    )
                )}
            </section>
        </div>
    );
};

export default Team;
