import React, { useState, useEffect } from "react";

import styles from "./Accordion.module.css";

import AccordionItem from "./AccordionItem";

const requiredKeys = ["id", "title", "description"];

function verifyItemsLength(items) {
  if (items.length === 0) {
    throw new Error(
      "Items array passed to Accordion should at least contain one item"
    );
  }
}

function verifyItemsKeys(items) {
  const allObjectsHaveRequiredKeys = items.every((obj) =>
    requiredKeys.every((key) => key in obj)
  );

  if (!allObjectsHaveRequiredKeys) {
    throw new Error(
      "Each item in items should contain id, title, and description"
    );
  }
}

function verifyValuesPassed(items) {
  const isValidItem = (obj) =>
    typeof obj.title === "string" &&
    typeof obj.description === "string" &&
    obj.title.length > 0 &&
    obj.description.length > 0;

  const allObjectsHaveValidItems = items.every(isValidItem);

  if (!allObjectsHaveValidItems) {
    throw new Error(
      "All Values for Title and Description should be valid, meaning typeof String and not empty"
    );
  }
}

const Accordion = ({ items }) => {
  const [hasError, setError] = useState(false);

  useEffect(() => {
    try {
      verifyItemsLength(items);
      verifyItemsKeys(items);
      verifyValuesPassed(items);
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
      setError(true);
    }
  }, [items]);

  if (hasError) {
    return (
      <section className={styles.questionsContainer}>
        <AccordionItem
          key="1"
          title="Invalid Question Provided"
          description="No description to provide"
        />
      </section>
    );
  }

  return (
    <section className={styles.questionsContainer}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default Accordion;
