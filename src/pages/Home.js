import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styles from "../styles/HomeStyles.module.css";
import Suggestions from "../components/Suggestions";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.topbar}></div>
      <Sidebar />
      <section className={styles.content}>
        <Header />
        <Suggestions />
      </section>
    </main>
  );
};

export default Home;
