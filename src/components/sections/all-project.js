import Image from "next/image";
import SectionTitle from "./section-title";

const AllProject = ({ data }) => {
    return (
        <div className="py-[67px] section">
            <SectionTitle
                title="ALL PROJECT"
                desc="Better Agency/SEO Solution At Your Fingertips"
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[50px]">
                {data.map(({ id, image, title }) => (
                    <div
                        key={id}
                        className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] p-[30px]"
                    >
                        <div className="relative h-[472px] overflow-hidden rounded-[20px]">
                            <Image
                                src={image}
                                fill
                                alt="image"
                                className="rounded-[20px] object-cover hover:scale-110 duration-300"
                            />
                        </div>
                        <h4 className="mt-[30px]">{title}</h4>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AllProject;
