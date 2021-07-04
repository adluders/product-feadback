import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styles from "../styles/HomeStyles.module.css";
import SuggestionItem from "../components/templates/SuggestionItem";

const Home = () => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <SuggestionItem />
      </div>
    </main>
  );
};

export default Home;
