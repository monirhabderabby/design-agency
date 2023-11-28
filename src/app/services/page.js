import AllServices from "@/components/sections/all-services";
import Subscribe from "@/components/sections/subscribe";
import PageHeader from "@/components/shared/header/page-header";

const Services = () => {
    return (
        <div>
            <PageHeader currentPage="Our Services" />
            <AllServices />
            <Subscribe />
        </div>
    );
};

export default Services;
