import moment from "moment/moment";
import Image from "next/image";
import SectionTitle from "./section-title";

const FeaturedProject = ({ data }) => {
    return (
        <div className="py-[61px] pb-[84px] bg-lightGreen">
            <section className="section h-auto">
                <SectionTitle
                    title="Featured Project"
                    desc="We provide the Perfect Solution to your business growth"
                />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] mt-[72px]">
                    <div className="relative space-y-[15px] md:col-span-2 md:row-span-2 h-full">
                        <div className="relative min-h-[188px] md:h-[85%]">
                            <Image
                                src={data[0]["image"]}
                                fill
                                className="object-cover rounded-[20px] "
                                alt="project"
                            />
                        </div>
                        <p className="text-[14px] text-[#2E3E5C] font-normal ">
                            {data[0]["remark"]} -{" "}
                            {moment(data[0]["created_at"]).format("LL")}
                        </p>
                        <h4>{data[0]["title"]}</h4>
                    </div>
                    {data
                        .slice(1, 5)
                        .map(({ id, image, title, remark, created_at }) => (
                            <div key={id} className="relative space-y-[15px]">
                                <div className="relative min-h-[180px]">
                                    <Image
                                        src={image}
                                        fill
                                        className="min-h-[188px] rounded-[20px] "
                                        alt="project"
                                    />
                                </div>
                                <p className="text-[14px] text-[#2E3E5C] font-normal ">
                                    {remark} - {moment(created_at).format("LL")}
                                </p>
                                <h4>{title}</h4>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default FeaturedProject;
