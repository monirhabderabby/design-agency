import Subscribe from "@/components/sections/subscribe";
import TestmonialList from "@/components/sections/testmonial-list";
import PageHeader from "@/components/shared/header/page-header";

const Testmonials = () => {
    return (
        <div>
            <PageHeader currentPage="Testmonial List" />
            <TestmonialList />
            <Subscribe />
        </div>
    );
};

export default Testmonials;
