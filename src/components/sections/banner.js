import styles from "@/assets/css/companiesSlider.module.css";
import Image from "next/image";
import google from "../../../public/companies/google.svg";
import monday from "../../../public/companies/monday.svg";
import notion from "../../../public/companies/notion.svg";
import slack from "../../../public/companies/slack.svg";
import trello from "../../../public/companies/trello.svg";
import img1 from "../../../public/hero/1.png";
import img2 from "../../../public/hero/2.png";
import img3 from "../../../public/hero/3.png";
import img4 from "../../../public/hero/4.png";

const image = {
    img1,
    img2,
    img3,
    img4,
};

const companies = [
    {
        id: 1,
        img: google,
    },
    {
        id: 2,
        img: trello,
    },
    {
        id: 3,
        img: monday,
    },
    {
        id: 4,
        img: notion,
    },
    {
        id: 5,
        img: slack,
    },
];

const Banner = () => {
    return (
        <div className="bg-[linear-gradient(180deg,_#D7F5DC_0%,_#D7F5DC_100%)] pt-[60px] min-h-screen pb-[50px]">
            <section className="section flex flex-col md:flex-col-reverse lg:flex-row items-center min-h-[calc(100vh-240px)] space-y-11 md:space-y-0 ">
                <div className="flex-1 md:pb-[50px]">
                    <h1 className="max-w-[550px]">
                        Increase Your Customers Loyalty and Satisfaction
                    </h1>
                    <h6 className="mt-[10px]">
                        We help businesses like yours earn more customers,
                        standout from competitors, make more money
                    </h6>
                    <button className="bg-siteGreen py-[10px] md:py-[20px] px-[20px] md:px-[30px] text-white text-[20px] font-medium rounded-[16px] mt-[50px] hover:bg-softGreen duration-200">
                        Get Started
                    </button>
                </div>
                <div className="flex-1 w-full space-y-[18px] pb-[50px] pt-[50px] ">
                    <div className="flex  gap-[18px]">
                        <div className="h-[271px] w-[408px] rounded-[10px] relative">
                            <Image
                                src={image.img1}
                                fill
                                alt="banner"
                                className="rounded-[10px]"
                            />
                        </div>
                        <div className=" h-[271px] w-[180px] rounded-[10px] relative">
                            <Image
                                src={image.img2}
                                fill
                                alt="banner"
                                className="rounded-[10px]"
                            />
                        </div>
                    </div>
                    <div className="flex  gap-[18px]">
                        <div className="h-[164px] w-[246px] rounded-[10px] relative">
                            <Image
                                src={image.img3}
                                fill
                                alt="banner"
                                className="rounded-[10px]"
                            />
                        </div>
                        <div className="h-[164px] w-[345px] rounded-[10px] relative">
                            <Image
                                src={image.img4}
                                fill
                                alt="banner"
                                className="rounded-[10px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="companies">
                <section className="bg-white h-[80px] md:h-[100px]">
                    <div className={styles.slider}>
                        <div className={`${styles.slideTrack}`}>
                            {/* first 5 slides */}
                            {companies.map(({ id, img }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={img}
                                        width={120}
                                        height={80}
                                        alt={img}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {companies.map(({ id, img }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={img}
                                        width={120}
                                        height={80}
                                        alt={img}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {companies.map(({ id, img }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={img}
                                        width={120}
                                        height={80}
                                        alt={img}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {companies.map(({ id, img }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={img}
                                        width={120}
                                        height={80}
                                        alt={img}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {companies.map(({ id, img }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={img}
                                        width={120}
                                        height={80}
                                        alt={img}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {companies.map(({ id, img }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={img}
                                        width={120}
                                        height={80}
                                        alt={img}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;
