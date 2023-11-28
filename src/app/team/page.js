import Subscribe from "@/components/sections/subscribe";
import Team from "@/components/sections/team";
import PageHeader from "@/components/shared/header/page-header";

const TeamContainer = () => {
    return (
        <div>
            <PageHeader currentPage="Team" />
            <Team />
            <Subscribe />
        </div>
    );
};

export default TeamContainer;
