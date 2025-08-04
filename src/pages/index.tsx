import React from "react";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Header</div>
      <div className={styles.subContainer}>
        <div className={styles.sidebarContainer}>
          <div className={styles.hero}>Hero</div>
          <div className={styles.sidebar}>SideBar</div>
        </div>
        <div className={styles.mainContentContainer}>
          <div className={styles.mainContent}>Main content</div>
          <div className={styles.extraContent}>Extra Content</div>
        </div>
      </div>
      <div className={styles.relatedContainer}>
        <div className={styles.relatedImages}>Related Images</div>
        <div className={styles.relatedPosts}>Related Posts</div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};

export default Home;
