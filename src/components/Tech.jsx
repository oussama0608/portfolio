import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Tools I use</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </div>
      <div className='mt-12 flex flex-row flex-wrap justify-center gap-5'>
        {technologies.map((technology) => (
          <div
            className='w-[130px] min-h-[132px] bg-tertiary rounded-2xl p-4 flex flex-col items-center justify-center text-center'
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-12 h-12 object-contain'
            />
            <p className='mt-4 text-secondary text-[13px] leading-5'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
