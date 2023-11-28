import moment from "moment/moment";
import Image from "next/image";
import img1 from "../../../public/featured-project/1.png";
import img2 from "../../../public/featured-project/2.png";
import img3 from "../../../public/featured-project/3.png";
import img4 from "../../../public/featured-project/4.png";
import img5 from "../../../public/featured-project/5.png";
import SectionTitle from "./section-title";

const FeaturedProject = () => {
    const data = [
        {
            id: 1,
            title: "App Redesign",
            image: img1,
            remark: "App Design",
            createdAt: "2023-09-20T05:29:26.000000Z",
        },
        {
            id: 2,
            title: "Redesign channel website landng page",
            image: img2,
            remark: "App Design",
            createdAt: "2023-09-20T05:29:26.000000Z",
        },
        {
            id: 3,
            title: "Redesign channel website landng page",
            image: img3,
            remark: "App Design",
            createdAt: "2023-09-20T05:29:26.000000Z",
        },
        {
            id: 4,
            title: "Redesign channel website landng page",
            image: img4,
            remark: "App Design",
            createdAt: "2023-09-20T05:29:26.000000Z",
        },
        {
            id: 5,
            title: "Redesign channel website landng page",
            image: img5,
            remark: "App Design",
            createdAt: "2023-09-20T05:29:26.000000Z",
        },
    ];
    return (
        <div className="py-[61px] bg-lightGreen">
            <section className="section h-auto">
                <SectionTitle
                    title="Featured Project"
                    desc="We provide the Perfect Solution to your business growth"
                />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] mt-[72px]">
                    <div className="relative space-y-[15px] col-span-2 row-span-2 h-full">
                        <div className="relative h-[85%]">
                            <Image
                                src={data[0]["image"]}
                                fill
                                className="object-cover rounded-[20px]"
                                alt="project"
                            />
                        </div>
                        <p className="text-[14px] text-[#2E3E5C] font-normal ">
                            {data[0]["remark"]} -{" "}
                            {moment(data[0]["createdAt"]).format("LL")}
                        </p>
                        <h4>{data[0]["title"]}</h4>
                    </div>
                    {data
                        .slice(1, 5)
                        .map(({ id, image, title, remark, createdAt }) => (
                            <div key={id} className="relative space-y-[15px]">
                                <div className="relative min-h-[180px]">
                                    <Image
                                        src={image}
                                        fill
                                        className="min-h-[188px]"
                                        alt="project"
                                    />
                                </div>
                                <p className="text-[14px] text-[#2E3E5C] font-normal ">
                                    {remark} - {moment(createdAt).format("LL")}
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
