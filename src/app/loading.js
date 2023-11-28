import styles from "@/assets/css/loader.module.css";

const Loading = () => {
    return (
        <div className="h-screen md:h-[calc(100vh-400px)] flex items-center justify-center">
            <span className={styles.loader}></span>
        </div>
    );
};

export default Loading;
