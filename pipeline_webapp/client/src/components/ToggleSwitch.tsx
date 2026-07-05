interface ToggleSwitchProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ToggleSwitch({
  checked,
  onChange,
}: ToggleSwitchProps) {
  return (
    <label className='flex items-center gap-4 cursor-pointer'>
      
      <div className='relative'>
        <input
          type='checkbox'
          checked={checked}
          className='sr-only peer'
          onChange={onChange}
        />

        <div className='w-14 h-8 bg-slate-700 rounded-full peer-checked:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/30'></div>

        <div className='absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-6'></div>
      </div>

      <span className='text-slate-300 tracking-wide'>
        Enable Forwarding
      </span>
    </label>
  );
}