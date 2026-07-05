import React from 'react';
import { motion } from 'framer-motion';

type StatsBlockProps = {
  label: string;
  value: number | string | string[];
  c?: string;
};

const StatsBlock: React.FC<StatsBlockProps> = ({
  label,
  value,
  c,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        rotateX: 4,
        rotateY: 4,
      }}
      transition={{ duration: 0.4 }}
      className='glass neon-border rounded-3xl p-6 flex flex-col gap-3'
    >
      <div className='text-slate-400 uppercase tracking-widest text-xs'>
        {label}
      </div>

      <div className={`${c} text-3xl font-bold text-white break-words`}>
        {value}
      </div>
    </motion.div>
  );
};

export default StatsBlock;