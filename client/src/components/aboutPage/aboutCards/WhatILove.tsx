import svgObject from '../../../utils/svgObject';

export default function WhatILove() {
  return (
    <div className='hover:shadow-xl transition-all group dark:text-gray-200 dark:border-slate-700 dark:bg-slate-800 border-slate-300 border rounded-2xl p-8 shadow-sm'>
      <header className='flex items-center gap-3 mb-6!'>
        <div className='group-hover:scale-120 transition-transform duration-300 dark:bg-purple-900 bg-pink-100 rounded-lg flex items-center justify-center w-12 h-12 '>
          <img width={30} src={svgObject.heart} alt='heart svg' />
        </div>
        <h3 className=' text-xl font-bold text-gray-900 dark:text-white'>
          What I Love
        </h3>
      </header>
      <div className='grid grid-cols-2 gap-3'>
        <HobbyCard
          className='bg-pink-100 gap-2 dark:bg-purple-900/20  flex flex-col justify-center items-center rounded-xl p-4'
          url={svgObject.cycling}
          hobby='Cycling'
        />
        <HobbyCard
          className='bg-purple-100 gap-2 dark:bg-indigo-900/20 flex flex-col justify-center items-center rounded-xl p-4'
          url={svgObject.book}
          hobby='Reading'
        />
        <HobbyCard
          className='bg-blue-100 gap-2 dark:bg-blue-900/20  flex flex-col justify-center items-center rounded-xl p-4'
          url={svgObject.gamepad}
          hobby='Gaming'
        />
        <HobbyCard
          className='bg-red-100 gap-2 dark:bg-pink-900/20  flex flex-col justify-center items-center rounded-xl p-4'
          url={svgObject.code}
          hobby='Coding'
        />
      </div>
    </div>
  );
}

function HobbyCard({
  className,
  url,
  hobby,
}: {
  className: string;
  url: string;
  hobby: string;
}) {
  return (
    <div className={className}>
      <img aria-hidden='true' width={25} src={url} alt='svg' />
      <p className='text-xs text-gray-700 dark:text-gray-300'>{hobby}</p>
    </div>
  );
}
