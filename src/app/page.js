import Banner from "@/components/sections/banner";
import FeaturedProject from "@/components/sections/features-project";
import StatList from "@/components/sections/stat-list";
import Subscribe from "@/components/sections/subscribe";
import WorkList from "@/components/sections/work-list";

export default function Home() {
    return (
        <main>
            <Banner />
            <WorkList />
            <StatList />
            <FeaturedProject />
            <Subscribe />
        </main>
    );
}
