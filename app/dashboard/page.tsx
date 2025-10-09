// import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header/Header";
import MainContent from "../components/mainContent/MainContent";
import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className={styles.page}>
        <Header  />
        <div className={styles.sidebarAndContent}>
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
