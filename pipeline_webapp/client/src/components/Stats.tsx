interface StatsProps {
  label: string;
  val: number;
}

export default function Stats({ label, val }: StatsProps) {
  return (
    <div className='glass neon-border hover-lift rounded-2xl px-6 py-5 flex justify-between items-center'>
      
      <div className='text-cyan-300 uppercase tracking-widest text-sm'>
        {label}
      </div>

      <div className='font-mono text-3xl font-bold glow-text'>
        {val}
      </div>
    </div>
  );
}