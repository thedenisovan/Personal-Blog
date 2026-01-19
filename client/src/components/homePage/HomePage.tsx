import HomeHeader from './parts/HomeHeader';
import { Link, useOutletContext } from 'react-router';
import svgObject from '../../utils/svgObject';
import ArticleCard from './parts/ArticleCard';

export default function HomePage() {
  const { allPosts, error, loading } = useOutletContext<{
    allPosts: Post[];
    loading: boolean;
    error: string;
  }>();

  if (error) console.error(error);

  return (
    <main className='flex-1'>
      <HomeHeader />

      <div
        className={`${loading ? 'flex justify-center items-center mt-10! md:mt-35!' : ''}`}
      >
        {loading ? (
          <>
            <img
              src={svgObject.loadingLight}
              className='dark:inline! hidden! animate-spin duration-1000 scale-200'
            />
            <img
              src={svgObject.loadingDark}
              className='inline! dark:hidden! animate-spin duration-1000 scale-200'
            />
          </>
        ) : (
          <>
            <section id='articles' className='max-w-6xl mx-auto! px-6 py-16'>
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
              <Link to={`post/${allPosts[allPosts.length - 1].id}`}>
                <ArticleCard
                  category={allPosts[allPosts.length - 1].categoryName.name}
                  title={allPosts[allPosts.length - 1].title}
                  description={allPosts[allPosts.length - 1].description}
                  date={allPosts[allPosts.length - 1].dateString}
                />
              </Link>
            </section>
            <section className='max-w-6xl mx-auto! px-6! pb-20!'>
              <h4 className='text-2xl font-bold text-gray-900 dark:text-white mb-8!'>
                Recent Articles
              </h4>
              <div className='grid md:grid-cols-2 gap-6'>
                {allPosts.map(
                  (post, idx) =>
                    idx < allPosts.length - 1 && (
                      <Link key={post.id} to={`post/${post.id}`}>
                        <ArticleCard
                          category={post.categoryName.name}
                          title={post.title}
                          description={post.description}
                        />
                      </Link>
                    ),
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
