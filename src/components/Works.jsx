import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  problem,
  solution,
  features,
  tags,
  image,
  demo_link,
  source_code_link,
  contact_link,
}) => {
  const openLink = (link) => {
    if (!link || link === "#") return;
    if (link.startsWith("#")) {
      window.location.hash = link;
      return;
    }
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl lg:w-[540px] sm:w-[460px] w-full'
      >
        <div className='relative w-full h-[220px] bg-black-100 rounded-2xl overflow-hidden'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-contain p-10 opacity-90'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => openLink(source_code_link)}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <p className='mt-4 text-white text-[14px] font-semibold'>Business problem</p>
          <p className='mt-1 text-secondary text-[14px]'>{problem}</p>
          <p className='mt-4 text-white text-[14px] font-semibold'>Solution</p>
          <p className='mt-1 text-secondary text-[14px]'>{solution}</p>
        </div>

        <div className='mt-4'>
          <p className='text-white text-[14px] font-semibold'>Key features</p>
          <ul className='mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-2'>
            {features.map((feature) => (
              <li
                key={`${name}-${feature}`}
                className='text-secondary text-[13px] leading-5'
              >
                - {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-6 flex flex-wrap gap-3'>
          <button
            type='button'
            onClick={() => openLink(demo_link)}
            className='bg-[#915EFF] py-2 px-4 rounded-lg text-white text-[14px] font-semibold'
          >
            Watch Demo
          </button>
          <button
            type='button'
            onClick={() => openLink(source_code_link)}
            className='bg-black-100 py-2 px-4 rounded-lg text-white text-[14px] font-semibold'
          >
            View Code
          </button>
          <a
            href={contact_link}
            className='bg-black-100 py-2 px-4 rounded-lg text-white text-[14px] font-semibold'
          >
            Contact Me
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          Business-focused builds
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These are backend systems designed around real business workflows:
          saving time, organizing data, and turning manual processes into
          reliable APIs and automation pipelines.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
