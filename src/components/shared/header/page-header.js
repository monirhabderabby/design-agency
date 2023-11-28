import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PageHeader = ({ currentPage }) => {
    return (
        <div className="bg-[#F8F9FC] h-[270px] md:h-[370px]">
            <section className="section pt-[60px] h-full flex-col flex justify-center items-start">
                <h2>{currentPage}</h2>
                <div className="flex items-center gap-[15px] mt-[20px]">
                    <Link href="/">Home</Link>
                    <ChevronRight className="h-4 w-4" />
                    <p className="text-siteGreen font-medium">{currentPage}</p>
                </div>
            </section>
        </div>
    );
};

export default PageHeader;
