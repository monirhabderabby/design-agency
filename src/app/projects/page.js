import AllProject from "@/components/sections/all-project";
import Subscribe from "@/components/sections/subscribe";
import PageHeader from "@/components/shared/header/page-header";

const Projects = () => {
    return (
        <div>
            <PageHeader currentPage="All Project" />
            <AllProject />
            <Subscribe />
        </div>
    );
};

export default Projects;
