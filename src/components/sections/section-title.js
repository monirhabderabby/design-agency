const SectionTitle = ({ title, desc }) => {
    return (
        <div className="max-w-[495px] space-y-[15px]">
            <h6 className="text-siteGreen">{title}</h6>
            <h3 className="leading-10">{desc}</h3>
        </div>
    );
};

export default SectionTitle;
