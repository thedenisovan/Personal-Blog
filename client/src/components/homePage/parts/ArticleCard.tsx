export default function ArticleCard({
  category,
  title,
  description,
  date,
}: {
  category: string;
  title: string;
  description: string;
  date?: string;
}) {
  return (
    <article className='group  cursor-pointer bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-transform duration-300'>
      <div className='p-8'>
        <div className='flex items-center gap-3 mb-4!'>
          <span className='inline-block px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 rounded-full'>
            {category}
          </span>
        </div>
        <h6 className='text-3xl font-bold text-gray-900 dark:text-white mb-4! group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
          {title}
        </h6>
        <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6! leading-relaxed'>
          {description}
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400'>
            <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
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
                className='lucide lucide-user w-4 h-4'
                aria-hidden='true'
              >
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
              <span>Dainis Dilevka</span>
            </div>
            {date && (
              <div className='flex items-center gap-2 '>
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
                  className='lucide lucide-calendar w-4 h-4'
                  aria-hidden='true'
                >
                  <path d='M8 2v4'></path>
                  <path d='M16 2v4'></path>
                  <rect width='18' height='18' x='3' y='4' rx='2'></rect>
                  <path d='M3 10h18'></path>
                </svg>
                <span>{date}</span>
              </div>
            )}
          </div>
          <div className='flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium group-hover:gap-3 transition-all'>
            <span>Read Article</span>
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
              className='lucide lucide-arrow-right w-5 h-5'
              aria-hidden='true'
            >
              <path d='M5 12h14'></path>
              <path d='m12 5 7 7-7 7'></path>
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
