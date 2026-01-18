import svgObject from '../../utils/svgObject';

export default function HomeHeader() {
  return (
    <header className='bg-linear-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-slate-800 dark:via-indigo-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-slate-700'>
      <div className='max-w-6xl mx-auto px-6 py-20'>
        <div className='text-center max-w-3xl mx-auto!'>
          <div className='flex items-center justify-center gap-6 mb-6!'>
            <img
              width={50}
              src={svgObject.starLight}
              className='hidden! dark:inline! animate-svg'
            />
            <img
              width={50}
              src={svgObject.chartLight}
              className='hidden! dark:inline! animate-svg-two'
            />
            <img
              width={45}
              src={svgObject.boltLight}
              className='hidden! dark:inline! animate-svg'
            />
            <img
              width={50}
              src={svgObject.starDark}
              className='dark:hidden! inline! animate-svg'
            />
            <img
              width={50}
              src={svgObject.chartDark}
              className='dark:hidden! inline! animate-svg-two'
            />
            <img
              width={45}
              src={svgObject.boltDark}
              className='dark:hidden! inline! animate-svg'
            />
          </div>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight'>
            Discover Amazing
            <span className='block mt-2 bg-gradient-to-r mb-6! from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Stories & Ideas
            </span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
            Dive into a world of knowledge, inspiration, and creativity. Explore
            articles on development, design, and the future of technology.
          </p>
        </div>
      </div>
    </header>
  );
}
