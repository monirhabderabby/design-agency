import Image from "next/image";
import SectionTitle from "./section-title";

const TestmonialList = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    return (
        <div className="py-[67px] section">
            <SectionTitle
                title="Testimonial List"
                desc="Better Agency/SEO Solution At Your Fingertips"
            />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[50px]">
                {arr.map((item) => (
                    <div
                        key={item}
                        className="rounded-[20px] bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] px-[23px] py-[40px] flex flex-col items-center gap-y-[10px]"
                    >
                        <div className="relative w-[100px] h-[100px] rounded-[20px] ">
                            <Image
                                src="https://agency.teamrabbil.com/files/360-F-299042079-vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                                fill
                                className="rounded-[20px] object-cover"
                                alt="profile"
                            />
                        </div>
                        <p className="text-[#9D9D9D] font-light mt-[40px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque et placerat metus. Morbi aliquet
                            felis sit amet erat finibus, ac condimentum ligula
                            ornare.
                        </p>
                        <h4 className="mt-[26px]">ALICE BRADEY</h4>
                        <p>Backend Developer</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default TestmonialList;
