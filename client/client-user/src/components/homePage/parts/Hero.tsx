import svgObject from '../../../utils/svgObject';

export default function Hero() {
  return (
    <header className=' duration-300 overflow-hidden bg-linear-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-slate-800 dark:via-indigo-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-slate-700'>
      <div className='max-w-6xl mx-auto! px-6 py-20 relative animate-translate-up'>
        <div className='bg-pink-400 absolute bottom-30 left-4 blur-[140px] w-50 h-50'></div>
        <div className='bg-blue-400 absolute top-30 right-4 blur-[140px] w-50 h-50'></div>
        <div className='text-center max-w-3xl mx-auto!'>
          <div className='flex items-center justify-center gap-6 mb-6!'>
            <SvgCompLight svg={svgObject.starLight} />
            <SvgCompLight svg={svgObject.chartLight} />
            <SvgCompLight svg={svgObject.boltLight} />

            <SvgCompDark svg={svgObject.starDark} />
            <SvgCompDark svg={svgObject.chartDark} />
            <SvgCompDark svg={svgObject.boltDark} />
          </div>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight'>
            Discover Amazing
            <span className='block mt-2 bg-linear-to-br mb-6! from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Stories & Ideas
            </span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-6! leading-relaxed'>
            Dive into a world of knowledge, inspiration, and creativity. Explore
            articles on development, design, and the future of technology.
          </p>
          <nav className='flex items-center justify-center gap-4'>
            <a
              href='#articles'
              className='bg-linear-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3! rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group'
            >
              Start Reading
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform'
                aria-hidden='true'
              >
                <path d='M5 12h14'></path>
                <path d='m12 5 7 7-7 7'></path>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function SvgCompLight({ svg }: { svg: string }) {
  return (
    <img
      width={50}
      aria-label='hidden'
      alt='simple svg icon'
      src={svg}
      className='hidden! dark:inline! animate-svg'
    />
  );
}

function SvgCompDark({ svg }: { svg: string }) {
  return (
    <img
      width={50}
      aria-label='hidden'
      alt='simple svg icon'
      src={svg}
      className='dark:hidden! inline! animate-svg'
    />
  );
}
