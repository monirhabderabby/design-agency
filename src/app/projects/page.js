import AllProject from "@/components/sections/all-project";
import Subscribe from "@/components/sections/subscribe";
import PageHeader from "@/components/shared/header/page-header";

async function getData() {
    const baseURL = process.env.baseURL;
    const res1 = await fetch(`${baseURL}/api/AllProject`);
    const data = await res1.json();

    return {
        projectData: data,
    };
}

const Projects = async () => {
    const { projectData } = await getData();
    return (
        <div>
            <PageHeader currentPage="All Project" />
            <AllProject data={projectData} />
            <Subscribe />
        </div>
    );
};

export default Projects;
