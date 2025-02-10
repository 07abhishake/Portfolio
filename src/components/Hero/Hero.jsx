import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhishek Patel </h1>
        <p className={styles.description}>
        🚀 I'm a Full-Stack Developer with expertise in React.js & Java.
        I love solving problems, optimizing performance, and creating intuitive user experiences. Let's collaborate!
        </p>
        <a href="mailto:abhishekpatel200221@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/HeroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
