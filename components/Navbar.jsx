'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >

    <div className="absolute w-[50%] inset-0 gradient-01" />

    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="logo" className="w-[28px] h-[28px] object-contain" />
      <h2 className="font-extrabold text-[30px] leading-[30px] text-white text-center">GCC <span className="text-[#D61818]">x</span> CSD</h2>
      <img src="/menu.svg" alt="menu" className="w-[28px] h-[28px] object-contain" id="menu" />
    </div>
    <div>
      <ul className="w-[40%] mx-auto my-[1.5rem] flex justify-between text-white font-medium cursor-pointer">
        <li><a href="/"> Home </a></li>
        <li><a href="/"> GC CS Students' Club </a></li>
        <li><a href="/"> Alumni </a></li>
        <li><a href="/"> About </a></li>
      </ul>
    </div>
  </motion.nav>
);

export default Navbar;
