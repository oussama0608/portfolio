import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Availability</p>
          <h2 className={styles.sectionHeadText}>
            Looking for my first AI automation clients.
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I am available for freelance projects where a small, practical MVP can
          save time, organize data, or automate a repeatable workflow.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "availability");
