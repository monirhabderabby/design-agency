"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TopLoaderProvider = () => {
    return (
        <ProgressBar
            height="3px"
            color="#20B15A"
            options={{ showSpinner: false }}
        />
    );
};

export default TopLoaderProvider;
