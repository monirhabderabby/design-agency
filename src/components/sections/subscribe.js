const Subscribe = () => {
    return (
        <div className="bg-white pt-[91px] pb-[137px] flex justify-center items-center">
            <div className="max-w-[620px] flex flex-col items-center justify-center">
                <h6 className="text-siteGreen text-center">SUBSCRIBE</h6>
                <h3 className="max-w-[495px] text-center leading-10 mt-[22px]">
                    Subscribe to get the latest news about us
                </h3>
                <p className="text-[#8B8B8B] font-medium text-center">
                    Please drop your email below to get daily update about what
                    we do
                </p>
                <form className="mt-[40px] flex h-[60px] border rounded-[14px] p-[4px] w-full">
                    <input
                        type="email"
                        className=" h-full flex-1 outline-none px-[20px]"
                        placeholder="Enter Your Email Adress "
                    />
                    <button
                        className="text-white font-medium text-[16px] bg-[#F55F1D] h-full rounded-[14px] px-[24px] py-[8px] disabled:bg-[#f55e1db9]"
                        disabled
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
