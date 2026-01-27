export default function Hero({ allPosts }: { allPosts: Post[] }) {
  return (
    <section className='grid grid-cols-3 max-w-4xl mb-8! gap-6 px-4 py-5 mx-auto!'>
      <HeroCard title={'Total Posts'} n={allPosts.length} />

      <HeroCard
        title={'Published'}
        n={allPosts.filter((post) => post.published).length}
      />

      <HeroCard title={'Users'} n={allPosts[0].count} />
    </section>
  );
}

function HeroCard({ title, n }: { title: string; n: number }) {
  return (
    <div className='bg-slate-800 border border-slate-700 rounded-lg p-6'>
      <p className='text-sm text-gray-400 mb-2!'>{title}</p>
      <p className='text-3xl font-bold text-white'>{n}</p>
    </div>
  );
}
