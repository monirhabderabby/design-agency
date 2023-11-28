import Subscribe from "@/components/sections/subscribe";
import TestmonialList from "@/components/sections/testmonial-list";
import PageHeader from "@/components/shared/header/page-header";

async function getData() {
    const baseURL = process.env.baseURL;
    const res1 = await fetch(`${baseURL}/api/TestimonialList`);
    const data = await res1.json();

    return {
        testmonialData: data,
    };
}

const Testmonials = async () => {
    const { testmonialData } = await getData();
    return (
        <div>
            <PageHeader currentPage="Testmonial List" />
            <TestmonialList data={testmonialData} />
            <Subscribe />
        </div>
    );
};

export default Testmonials;
