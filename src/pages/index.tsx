import { useState } from "react";
import styles from "../styles/Home.module.css";
import ExerciseSix from "../components/exercise_6";
import { Button } from "@mui/material";

const Home: React.FC = () => {
  const [enabledTest, setEnabledTest] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Header</div>
      <div className={styles.subContainer}>
        <div className={styles.sidebarContainer}>
          <div className={styles.hero}>Hero</div>
          <div className={styles.sidebar}>SideBar</div>
        </div>
        <div className={styles.mainContentContainer}>
          <div className={styles.mainContent}>
            Main content
            <Button
              variant="contained"
              onClick={() => setEnabledTest(!enabledTest)}
              style={{ width: "200px", alignSelf: "center" }}
            >
              {enabledTest ? "Close Exercise 6" : "Open Exercise 6"}
            </Button>
            {enabledTest ? <ExerciseSix /> : null}
          </div>
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
