import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import MiImagen from "./canvas/MiImagen";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[110px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="relative flex-1 max-w-4xl">
          <p className='text-secondary uppercase tracking-wider text-[14px] sm:text-[18px]'>
            Oussama Brahmi
          </p>
          <h1 className={`${styles.heroHeadText} text-white max-w-4xl`}>
            AI Automation & FastAPI <span className='text-[#915EFF]'>Backend Developer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-3xl`}>
            I build backend systems for AI automation, lead generation,
            document processing, and internal knowledge bases.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href='#works'
              className='bg-[#915EFF] py-3 px-6 rounded-xl text-white font-bold shadow-md shadow-primary'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='bg-tertiary py-3 px-6 rounded-xl text-white font-bold shadow-md shadow-primary'
            >
              Contact Me
            </a>
          </div>

          <div className="hidden lg:block absolute right-0 top-[50%] transform -translate-y-1/2 z-10">
            <MiImagen />
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
