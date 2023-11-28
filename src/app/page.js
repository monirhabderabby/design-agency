import Banner from "@/components/sections/banner";
import StatList from "@/components/sections/stat-list";
import WorkList from "@/components/sections/work-list";

export default function Home() {
    return (
        <main>
            <Banner />
            <WorkList />
            <StatList />
        </main>
    );
}
