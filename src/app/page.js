import Banner from "@/components/sections/banner";
import FeaturedProject from "@/components/sections/features-project";
import StatList from "@/components/sections/stat-list";
import Subscribe from "@/components/sections/subscribe";
import WorkList from "@/components/sections/work-list";

export async function generateMetadata() {
    const baseURL = process.env.baseURL;
    const res = await fetch(`${baseURL}/api/SiteMeta/home`);
    const data = await res.json();
    return {
        title: data[0]["title"],
        description: data[0]["description"],
        keywords: data[0]["keywords"],
        openGraph: {
            images: data[0]["image"],
        },
    };
}

async function getData() {
    const baseURL = process.env.baseURL;
    const res1 = await fetch(`${baseURL}/api/HeroList`);
    const res2 = await fetch(`${baseURL}/api/BrandList`);
    const res3 = await fetch(`${baseURL}/api/WorkList`);
    const res4 = await fetch(`${baseURL}/api/StatList`);
    const res5 = await fetch(`${baseURL}/api/FeaturedProject`);
    const heroDataRes = await res1.json();
    const brandListRes = await res2.json();
    const workListRes = await res3.json();
    const statListRes = await res4.json();
    const featuredProjectRes = await res5.json();

    return {
        heroData: heroDataRes,
        brandList: brandListRes,
        workList: workListRes,
        statList: statListRes,
        featuredProjectData: featuredProjectRes,
    };
}

export default async function Home() {
    const { heroData, brandList, workList, statList, featuredProjectData } =
        await getData();
    return (
        <main>
            <Banner data={heroData} brandList={brandList} />
            <WorkList data={workList} />
            <StatList data={statList} />
            <FeaturedProject data={featuredProjectData} />
            <Subscribe />
        </main>
    );
}
