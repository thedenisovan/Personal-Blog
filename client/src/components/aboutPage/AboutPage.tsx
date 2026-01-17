import text from '../../utils/textObject';
import Location from './aboutCards/Location';
import WhatIDo from './aboutCards/WhatIDo';
import WhatILove from './aboutCards/WhatILove';
import TechStack from './aboutCards/TechStack';
import CallToAction from './aboutCards/CallToAction';

export default function AboutPage() {
  return (
    <main className='dark:bg-slate-900 bg-gray-100 px-6 py-12 max-w-4xl mx-auto!'>
      <header className='flex flex-col items-center justify-center'>
        <div className='mb-8! animate-scale-in z-0 w-32 h-32 text-5xl shadow-2xl flex items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-bold'>
          DD
        </div>
        <section className='animate-translate-up'>
          <h2 className='text-gray-900 font-bold dark:text-white text-5xl text-center mb-6!'>
            Hi there! I'm{' '}
            <span className='bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Dainis Dilevka{' '}
            </span>{' '}
            &#128075;
          </h2>
          <p className='text-center text-xl text-gray-600 dark:text-gray-100 leading-relaxed max-w-2xl mb-16!'>
            I'm a passionate self-taught web developer and philosophical thinker
            &#128517; who loves building beautiful, functional experiences on
            the web.
          </p>
        </section>
        <section className='animate-translate-up '>
          <div className='hover:shadow-xl transition-all dark:text-gray-200 dark:bg-slate-800 dark:border-slate-700 border-slate-300 border rounded-2xl p-8 shadow-sm'>
            <h3 className='mb-6! text-2xl font-bold text-gray-900 dark:text-white'>
              My Story
            </h3>
            <p className='pb-6 2xl:text-lg!'>{text.myStory}</p>
            <p className='pb-6 2xl:text-lg!'>{text.myStory2}</p>
            <p className='2xl:text-lg!'>{text.myStory3}</p>
            <p className='pt-6 2xl:text-lg!'>{text.myStory4}</p>
          </div>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-8 my-16!'>
            <Location />
            <WhatIDo />
            <WhatILove />
            <TechStack />
          </section>
          <CallToAction />
        </section>
      </header>
    </main>
  );
}
