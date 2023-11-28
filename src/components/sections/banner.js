import styles from "@/assets/css/companiesSlider.module.css";
import Image from "next/image";

const Banner = ({ data, brandList }) => {
    return (
        <div className="bg-[linear-gradient(180deg,_#D7F5DC_0%,_#D7F5DC_100%)] pt-[60px] min-h-screen pb-[50px]">
            <section className="section flex flex-col md:flex-col-reverse lg:flex-row items-center min-h-[calc(100vh-240px)] space-y-11 md:space-y-0 ">
                <div className="flex-1 md:pb-[50px]">
                    <h1 className="max-w-[550px]">{data["title"]}</h1>
                    <h6 className="mt-[10px]">{data["description"]}</h6>
                    <button className="bg-siteGreen py-[10px] md:py-[20px] px-[20px] md:px-[30px] text-white text-[20px] font-medium rounded-[16px] mt-[50px] hover:bg-softGreen duration-200">
                        Get Started
                    </button>
                </div>
                <div className="flex-1 w-full space-y-[18px] pb-[50px] pt-[50px] ">
                    <div className="flex  gap-[18px]">
                        <div className="h-[271px] w-[408px] rounded-[10px] relative">
                            <Image
                                src={data["image1"]}
                                fill
                                alt="banner"
                                className="rounded-[10px] object-cover"
                            />
                        </div>
                        <div className=" h-[271px] w-[180px] rounded-[10px] relative">
                            <Image
                                src={data["image2"]}
                                fill
                                alt="banner"
                                className="rounded-[10px] "
                            />
                        </div>
                    </div>
                    <div className="flex  gap-[18px]">
                        <div className="h-[164px] w-[246px] rounded-[10px] relative">
                            <Image
                                src={data["image3"]}
                                fill
                                alt="banner"
                                className="rounded-[10px] object-cover"
                            />
                        </div>
                        <div className="h-[164px] w-[345px] rounded-[10px] relative">
                            <Image
                                src={data["image4"]}
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
                            {brandList.map(({ id, image, name }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={image}
                                        width={120}
                                        height={80}
                                        alt={name}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {brandList.map(({ id, image, name }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={image}
                                        width={120}
                                        height={80}
                                        alt={name}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {brandList.map(({ id, image, name }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={image}
                                        width={120}
                                        height={80}
                                        alt={name}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {brandList.map(({ id, image, name }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={image}
                                        width={120}
                                        height={80}
                                        alt={name}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {brandList.map(({ id, image, name }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={image}
                                        width={120}
                                        height={80}
                                        alt={name}
                                        className="aspect-video"
                                    />
                                </div>
                            ))}
                            {brandList.map(({ id, image, name }) => (
                                <div className={styles.slide} key={id}>
                                    <Image
                                        src={image}
                                        width={120}
                                        height={80}
                                        alt={name}
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
