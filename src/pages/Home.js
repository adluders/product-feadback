import Sidebar from "../components/Sidebar";
import styles from "../styles/HomeStyles.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <Sidebar />
    </main>
  );
};

export default Home;
