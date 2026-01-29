import { useEffect, useState, type FormEvent } from 'react';
import { useOutletContext, Link, Navigate } from 'react-router';

export default function NewPostForm() {
  const { isAdmin } = useOutletContext<{ isAdmin: boolean }>();

  const [authorId, setAuthorId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number>(0);
  const [categoryName, setCategoryName] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [isPostCreated, setPostCreated] = useState<boolean>(false);

  // After page loads checks if user is admin if yes get
  // his token and get his id
  useEffect(() => {
    const getAuthorId = () => {
      const author = localStorage.getItem('user');
      if (author) setAuthorId(JSON.parse(author).id);
    };

    const getToken = () => {
      const token = localStorage.getItem('token');

      if (token) setToken(token);
      else setToken('');
    };

    if (isAdmin) {
      getAuthorId();
      getToken();
    }
  });

  // Create new post api
  const submitNewPost = async (
    e: FormEvent,
    title: string,
    content: string,
    description: string,
    categoryId?: number,
    categoryName?: string,
  ) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/newPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          authorId,
          title,
          categoryId,
          categoryName,
          content,
          description,
        }),
      });

      if (!response.ok) throw new Error(`Error ${response.status}`);

      setPostCreated(true);
    } catch (error) {
      console.error(
        `Error occur during posting new post ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  };
  if (isPostCreated) {
    return <Navigate to='/' />;
  }

  return (
    <main className='bg-slate-900 min-h-screen'>
      <section className=' max-w-6xl mx-auto! px-6 py-8'>
        <Link
          className='text-gray-300 text-lg flex items-center gap-2 hover:text-white mb-8! font-medium transition-colors'
          to='/'
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
            className='lucide lucide-arrow-left w-4 h-4'
            aria-hidden='true'
          >
            <path d='m12 19-7-7 7-7'></path>
            <path d='M19 12H5'></path>
          </svg>
          Cancel
        </Link>
        <div className='bg-slate-800 border border-slate-700 rounded-lg p-8'>
          <h2 className='text-2xl font-bold text-white mb-6!'>
            Create New Post
          </h2>
          <form
            className='space-y-6!'
            onSubmit={(e) =>
              submitNewPost(
                e,
                title,
                content,
                description,
                categoryId,
                categoryName,
              )
            }
          >
            <div>
              <label
                htmlFor='title'
                className='block text-md font-medium text-gray-300 mb-2!'
              >
                Title
              </label>
              <input
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className='w-full  px-4 py-2 text-md bg-slate-900 border border-slate-600 rounded-md focus-ring2 focus:ring-slate-500 focus:border-transparent outline-none text-white'
              />
            </div>
            <div>
              <label
                htmlFor='categoryName'
                className='block text-md font-medium text-gray-300 mb-2!'
              >
                New Category Name{' '}
                <span className='text-green-400'>
                  *(if fill field this skip category id field)
                </span>
              </label>
              <input
                type='text'
                name='categoryName'
                id='categoryName'
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required={!categoryId ? false : true}
                readOnly={!categoryId ? false : true}
                className='w-full  px-4 py-2 text-md bg-slate-900 border border-slate-600 rounded-md focus-ring2 focus:ring-slate-500 focus:border-transparent outline-none text-white'
              />
            </div>
            <div>
              <label
                htmlFor='categoryId'
                className='block text-md font-medium text-gray-300 mb-2!'
              >
                Category ID{' '}
                <span className='text-green-400'>
                  *(if fill field this skip category name field)
                </span>
              </label>
              <input
                type='number'
                name='categoryId'
                id='categoryId'
                value={categoryId}
                onChange={(e) => setCategoryId(Number(e.target.value))}
                required={!categoryName ? false : true}
                readOnly={!categoryName ? false : true}
                className='w-full  px-4 py-2 text-md bg-slate-900 border border-slate-600 rounded-md focus-ring2 focus:ring-slate-500 focus:border-transparent outline-none text-white'
              />
            </div>
            <div>
              <label
                htmlFor='description'
                className='block text-md font-medium text-gray-300 mb-2!'
              >
                Description
              </label>
              <textarea
                rows={3}
                name='description'
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className='w-full  px-4 py-2 text-md bg-slate-900 border border-slate-600 rounded-md focus-ring2 focus:ring-slate-500 focus:border-transparent outline-none text-white'
              ></textarea>
            </div>
            <div>
              <label
                htmlFor='content'
                className='block text-md font-medium text-gray-300 mb-2!'
              >
                Content
              </label>
              <textarea
                rows={15}
                name='content'
                id='content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className='w-full  px-4 py-2 text-md bg-slate-900 border border-slate-600 rounded-md focus-ring2 focus:ring-slate-500 focus:border-transparent outline-none text-white'
              ></textarea>
            </div>
            <div className='flex gap-4 pt-4'>
              <button
                type='submit'
                className='bg-slate-700 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-600 transition-colors'
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
