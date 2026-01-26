import svgObject from '../../../utils/svgObject';

export default function WhatIDo() {
  return (
    <div className='hover:shadow-xl group dark:text-gray-200 transition-all dark:border-slate-700 dark:bg-slate-800 border-slate-300 border rounded-2xl p-8 shadow-sm'>
      <header className='flex items-center gap-3 mb-6!'>
        <div className='group-hover:scale-120 transition-transform duration-300 dark:bg-blue-900/30 bg-blue-100 rounded-lg flex items-center justify-center w-12 h-12 '>
          <img
            width={30}
            src={svgObject.embedDark}
            alt='location svg'
            className='dark:hidden! inline!'
          />
          <img
            width={30}
            src={svgObject.embedLight}
            alt='location svg'
            className='hidden! dark:inline!'
          />
        </div>
        <h3 className=' text-xl font-bold text-gray-900 dark:text-white'>
          What I Do
        </h3>
      </header>
      <div className='flex gap-3 flex-col'>
        <SkillComponent
          bullet=' oklch(62.3% 0.214 259.815)'
          text='Frontend Development'
        />
        <SkillComponent
          bullet='oklch(58.5% 0.233 277.117)'
          text='Backend Development'
        />
        <SkillComponent
          bullet=' oklch(62.7% 0.265 303.9)'
          text='Performance & Scalability'
        />
        <SkillComponent
          bullet='oklch(65.6% 0.241 354.308)'
          text='Problem Solving & System Thinking'
        />
      </div>
    </div>
  );
}

function SkillComponent({ bullet, text }: { bullet: string; text: string }) {
  return (
    <div className='flex items-center gap-2 bg-gray-200/40 dark:bg-slate-700/50 rounded-lg p-3'>
      <div
        className='w-2 h-2 rounded-full'
        style={{ background: bullet }}
      ></div>
      <p className='dark:text-gray-300 text-gray-700 text-sm '>{text}</p>
    </div>
  );
}
