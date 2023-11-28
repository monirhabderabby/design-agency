import Banner from "@/components/sections/banner";
import FeaturedProject from "@/components/sections/features-project";
import StatList from "@/components/sections/stat-list";
import Subscribe from "@/components/sections/subscribe";
import WorkList from "@/components/sections/work-list";

async function getData() {
    const baseURL = process.env.baseURL;
    const res1 = await fetch(`${baseURL}/api/HeroList`);
    const res2 = await fetch(`${baseURL}/api/BrandList`);
    const heroDataRes = await res1.json();
    const brandListRes = await res2.json();

    return {
        heroData: heroDataRes,
        brandList: brandListRes,
    };
}

export default async function Home() {
    const { heroData, brandList } = await getData();
    return (
        <main>
            <Banner data={heroData} brandList={brandList} />
            <WorkList />
            <StatList />
            <FeaturedProject />
            <Subscribe />
        </main>
    );
}
