import svgObject from '../../../utils/svgObject';

export default function Location() {
  return (
    <div className='group dark:text-gray-200 dark:bg-slate-800 border-slate-700 border rounded-2xl p-8 shadow-sm'>
      <header className='flex items-center gap-3 mb-4!'>
        <div className='group-hover:scale-120 transition-transform duration-300 dark:bg-blue-900/30 bg-blue-100 rounded-lg flex items-center justify-center w-12 h-12'>
          <img
            width={30}
            src={svgObject.darkLocation}
            alt='location svg'
            className='dark:hidden! inline!'
          />
          <img
            width={30}
            src={svgObject.lightLocation}
            alt='location svg'
            className='hidden! dark:inline!'
          />
        </div>
        <h3 className=' text-xl font-bold text-gray-900 dark:text-white'>
          My location
        </h3>
      </header>
      <div className='bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-4 overflow-hidden flex items-center justify-center'>
        <div className='p-5 w-40 h-40 bg-radial dark:from-blue-900/20 from-40% dark:to-blue-900/50  from-blue-300/20 to-blue-300/50 rounded-full flex justify-center flex-col items-center'>
          <div className='border-red-800 border-2 rounded-full bg-red-600 w-4 h-4 mb-4! animate-pulse mx-auto!'></div>
          <h4 className='text-center font-bold'>United Kingdom</h4>
          <p className='text-center'>England</p>
        </div>
      </div>
      <p className='mt-4!'>
        I’m based in beautiful “Misty Albion,” England, though I originally come
        from Latvia, so I'm based roughly 1,600 km away from my homeland.
      </p>
    </div>
  );
}
