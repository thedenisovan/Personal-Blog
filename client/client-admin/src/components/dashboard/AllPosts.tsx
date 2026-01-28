import { useEffect, useState, type FormEvent } from 'react';

export default function AllPosts({ allPosts }: { allPosts: Post[] }) {
  const [token, setToken] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>(allPosts);

  // Gets token from local storage and assigns int to state value
  useEffect(() => {
    const getToken = () => {
      const token = localStorage.getItem('token');

      if (!token) setToken('');
      else setToken(token);
    };

    getToken();
  });

  // Toggle post between posted or not
  const togglePost = async (
    e: FormEvent,
    postId: number,
    published: boolean,
  ) => {
    e.preventDefault();

    try {
      await fetch('http://localhost:5000', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ postId, published }),
      });

      // Update local state to trigger re-render
      setPosts(
        posts.map((post) =>
          post.id === postId ? { ...post, published: !post.published } : post,
        ),
      );
    } catch (error) {
      console.error(`
          ${error instanceof Error ? error.message : String(error)}
        `);
    }
  };

  return (
    <main className='space-y-4! px-4 xl:px-0'>
      {posts.map((post) => (
        <div
          key={post.id}
          className='max-w-6xl mx-auto! bg-slate-800 border hover:bg-slate-800/80 border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors'
        >
          <div className='flex items-start justify-between gap-6'>
            <div className='flex-1'>
              <header className='flex items-center gap-3 mb-2!'>
                <h3 className='font-bold text-white'>{post.title}</h3>
                <span className='text-xs px-2 py-1 bg-slate-700 text-gray-300 rounded'>
                  {post.categoryName.name}
                </span>
                {/* If post is published display its text in green else in red */}
                <span
                  className={`text-xs px-2 py-1  rounded ${post.published ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}
                >
                  {post.published ? 'Published' : 'Draft'}
                </span>
              </header>
              <p className='text-sm text-gray-400 mb-3! line-clamp-2'>
                {post.description}
              </p>
              <div className='text-sm text-gray-500 flex gap-1'>
                <p>Dainis Dilevka</p>
                <p> • </p>
                <p>{post.dateString}</p>
              </div>
            </div>

            {/* Buttons to CRUD posts */}
            <div className='flex items-center gap-2'>
              {/* Edit post button */}
              <button
                className='p-2 hover:bg-slate-700 rounded-md transition-colors'
                title='Edit'
              >
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
                  className='lucide lucide-square-pen w-5 h-5 text-gray-400'
                  aria-hidden='true'
                >
                  <path d='M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                  <path d='M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z'></path>
                </svg>
              </button>
              {/* Toggle published status post button */}
              <button
                onClick={(e) => {
                  togglePost(e, post.id, post.published);
                }}
                className='p-2 hover:bg-slate-700 rounded-md transition-colors'
                title='Unpublish'
              >
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
                  className='lucide lucide-eye-off w-5 h-5 text-gray-400'
                  aria-hidden='true'
                >
                  <path d='M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49'></path>
                  <path d='M14.084 14.158a3 3 0 0 1-4.242-4.242'></path>
                  <path d='M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143'></path>
                  <path d='m2 2 20 20'></path>
                </svg>
              </button>
              {/* Delete post button */}
              <button
                className='p-2 hover:bg-red-900/20 rounded-md transition-colors'
                title='Delete'
              >
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
                  className='lucide lucide-trash2 lucide-trash-2 w-5 h-5 text-red-400'
                  aria-hidden='true'
                >
                  <path d='M10 11v6'></path>
                  <path d='M14 11v6'></path>
                  <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6'></path>
                  <path d='M3 6h18'></path>
                  <path d='M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
