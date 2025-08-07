import React from "react";

import starIcon from "../../assets/images/icon-star.svg";

import styles from "./FaqCard.module.css";
import questions from "./questions";

import Accordion from "../Accordion";

const FaqCard = () => {
  return (
    <article className={styles.faqCardContainer}>
      <div className={styles.cardTitle}>
        <img
          src={starIcon}
          alt="Star icon"
          width="30"
          height="30"
        />
        <h1>FAQs</h1>
      </div>
      <Accordion items={questions} />
    </article>
  );
};

export default FaqCard;
