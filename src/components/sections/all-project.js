import Image from "next/image";
import img1 from "../../../public/all-project/1.png";
import SectionTitle from "./section-title";

const AllProject = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    return (
        <div className="py-[67px] section">
            <SectionTitle
                title="ALL PROJECT"
                desc="Better Agency/SEO Solution At Your Fingertips"
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[50px]">
                {arr.map((item) => (
                    <div
                        key={item}
                        className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] p-[30px]"
                    >
                        <div className="relative h-[472px] overflow-hidden rounded-[20px]">
                            <Image
                                src={img1}
                                fill
                                alt="image"
                                className="rounded-[20px] object-cover hover:scale-110 duration-300"
                            />
                        </div>
                        <h4 className="mt-[30px]">
                            Lorem ipsum dolor sit consectutar
                        </h4>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AllProject;
