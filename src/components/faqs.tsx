import { useState } from "react";
import clsx from "clsx";

import SectionHeader from "components/section-header";

import styles from "styles/faqs.module.scss";

const AccordionItem = ({ header = "", content = "" }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={clsx(styles.accordionItem, active && styles.active)}>
      <button onClick={() => setActive(!active)}>{header}</button>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

const FAQs = () => (
  <section className={styles.faqs}>
    <SectionHeader
      emoji="💬"
      header="Frequently asked questions"
      subheader="Find your answers"
    />
    <div className={styles.accordion}>
      <AccordionItem
        header="What makes Provector unique?"
        content="Provector lets you creating sophisticated vector graphics
        with full-featured vector drawing tools. Precise control over your
        design artwork to create high-quality illustrations and icons. A solid
        set of path editing features help you to realize your ideas without
        limitations."
      />
      <AccordionItem
        header="How can I get started?"
        content="Provector provides a intuitive user interface to flatten to the learn curve, If you have experiences with other drawing tools, like Adobe Illustrator or Figma, you will be able to start using Provector without any problems. You can also start with the documentations to learn Provector as beginner."
      />
      <AccordionItem
        header="Is Provector cloud based?"
        content="Provector is purely a static web application, we don't collect any data or artworks for any commercial purposes."
      />
      <AccordionItem
        header="Do I need to create a user account?"
        content="You can start using Provector immediately in your browser without
       any registration and subscription. We don't store any your personal information on our server."
      />
      <AccordionItem
        header="What are browser and hardware requirements?"
        content="Provector works better on webkit based browsers, like Google Chrome or Microsoft Edge. It is a lightweight vector drawing tool, so you can use it even on low performance computers."
      />
      <AccordionItem
        header="Can I work offline with Provector?"
        content="You can install Provector as desktop application in your computer through Google Chrome, but you still need the internet connection to load the google fonts."
      />
    </div>
  </section>
);

export default FAQs;
