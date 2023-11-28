import styles from "@/assets/css/loader.module.css";

const Loader = () => {
    return (
        <div className="h-screen md:h-[calc(100vh-400px)] flex items-center justify-center">
            <span className={styles.loader}></span>
        </div>
    );
};

export default Loader;
