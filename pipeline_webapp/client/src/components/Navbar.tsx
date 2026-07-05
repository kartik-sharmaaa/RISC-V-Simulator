import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='sticky top-0 z-50 px-6 py-4'
    >
      <div className='glass neon-border rounded-2xl px-8 py-4 flex justify-between items-center'>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='text-2xl font-black tracking-widest glow-text'
        >
          <Link to='/'>RISC - V Simulator</Link>
        </motion.div>

        <ul className='flex items-center gap-6 text-sm uppercase tracking-wider'>
          
          <motion.li whileHover={{ y: -2 }}>
            <a
              href=''
              className='text-slate-300 hover:text-cyan-400 transition'
            >
              Single Cycle
            </a>
          </motion.li>

          <motion.li whileHover={{ y: -2 }}>
            <Link
              to='/'
              className='text-slate-300 hover:text-cyan-400 transition'
            >
              Editor
            </Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to='/simulator'
              className='px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600'
            >
              Simulator
            </Link>
          </motion.li>

        </ul>
      </div>
    </motion.nav>
  );
}