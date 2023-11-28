import AllServices from "@/components/sections/all-services";
import Subscribe from "@/components/sections/subscribe";
import PageHeader from "@/components/shared/header/page-header";

async function getData() {
    const baseURL = process.env.baseURL;
    const res1 = await fetch(`${baseURL}/api/AllService`);
    const data = await res1.json();

    return {
        servicesData: data,
    };
}

const Services = async () => {
    const { servicesData } = await getData();
    return (
        <div>
            <PageHeader currentPage="Our Services" />
            <AllServices data={servicesData} />
            <Subscribe />
        </div>
    );
};

export default Services;
