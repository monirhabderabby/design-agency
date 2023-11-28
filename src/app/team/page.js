import Subscribe from "@/components/sections/subscribe";
import Team from "@/components/sections/team";
import PageHeader from "@/components/shared/header/page-header";

async function getData() {
    const baseURL = process.env.baseURL;
    const res1 = await fetch(`${baseURL}/api/TeamList`);
    const teamRes = await res1.json();

    return {
        teamListData: teamRes,
    };
}

const TeamContainer = async () => {
    const { teamListData } = await getData();
    return (
        <div>
            <PageHeader currentPage="Team" />
            <Team data={teamListData} />
            <Subscribe />
        </div>
    );
};

export default TeamContainer;
