import React from "react";

import styles from "./FaqCard.module.css";
import questions from "./questions";

import Accordion from "../Accordion";

const FaqCard = () => {
  return (
    <article className={styles.faqCardContainer}>
      <div className={styles.cardTitle}>
        <picture
          srcSet="/src/assets/images/icon-star.svg"
          type="image/svg"
        >
          <img
            src="/src/assets/images/icon-star.svg"
            alt=""
            width="30"
            height="30"
          />
        </picture>
        <h1>FAQs</h1>
      </div>
      <Accordion items={questions} />
    </article>
  );
};

export default FaqCard;
