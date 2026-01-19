import HomeHeader from './parts/HomeHeader';
import { useOutletContext } from 'react-router';
import svgObject from '../../utils/svgObject';
import ArticleCard from './parts/ArticleCard';

export default function HomePage() {
  const { posts, loading, error } = useOutletContext<{
    posts: Post[];
    loading: boolean;
    error: string;
  }>();

  if (error) console.error(error);

  return (
    <main className='flex-1'>
      <HomeHeader />
      <section className='max-w-6xl mx-auto! px-6 py-16'>
        <div className='flex items-center gap-1 mb-6!'>
          <img
            width={23}
            src={svgObject.starLight}
            aria-label='hidden'
            className='hidden! dark:block! rotate-30'
          />
          <img
            width={23}
            src={svgObject.starDark}
            aria-label='hidden'
            className='block! rotate-30 dark:hidden!'
          />
          <h4 className='text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wie'>
            LATEST ARTICLE
          </h4>
        </div>
        {posts.length && (
          <ArticleCard
            category={posts[posts.length - 1].categoryName.name}
            title={posts[posts.length - 1].title}
            description={posts[posts.length - 1].description}
            date={posts[posts.length - 1].dateString}
          />
        )}
      </section>
    </main>
  );
}
