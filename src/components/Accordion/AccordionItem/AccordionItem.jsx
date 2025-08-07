import React from "react";

import styles from "./AccordionItem.module.css";

const AccordionItem = ({ title, description }) => {
  return (
    <details
      name="faqs"
      className={styles.questionContainer}
    >
      <summary>{title}</summary>
      <p>{description}</p>
    </details>
  );
};

export default AccordionItem;
