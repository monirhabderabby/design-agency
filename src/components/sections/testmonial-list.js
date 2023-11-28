import Image from "next/image";
import SectionTitle from "./section-title";

const TestmonialList = ({ data }) => {
    return (
        <div className="py-[67px] section">
            <SectionTitle
                title="Testimonial List"
                desc="Better Agency/SEO Solution At Your Fingertips"
            />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[50px]">
                {data.map(({ id, name, designation, image, msg }) => (
                    <div
                        key={id}
                        className="rounded-[20px] bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] px-[23px] py-[40px] flex flex-col items-center gap-y-[10px]"
                    >
                        <div className="relative w-[100px] h-[100px] rounded-[20px] ">
                            <Image
                                src={image}
                                fill
                                className="rounded-[20px] object-cover"
                                alt="profile"
                            />
                        </div>
                        <p className="text-[#9D9D9D] font-light mt-[40px]">
                            {msg}
                        </p>
                        <h4 className="mt-[26px]">{name}</h4>
                        <p>{designation}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default TestmonialList;
