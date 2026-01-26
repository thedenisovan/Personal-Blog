import { useEffect, useState, type FormEvent } from 'react';
import type { Comment, UserToken } from '../../types/react.js';
import { useOutletContext } from 'react-router';

export default function Comments({
  post,
  postId,
  isSignedIn,
}: {
  post: Post | undefined;
  postId: string;
  isSignedIn: boolean;
}) {
  const [comments, setComments] = useState<Comment[] | undefined>(
    post?.comments,
  );
  const { user } = useOutletContext<{ user: UserToken }>();
  const updateComments = (data: Comment[]) => setComments(data);

  let token: string;

  if (isSignedIn) {
    token = JSON.stringify(localStorage.getItem('token'));
  }

  const deleteComment = async (commentId: number) => {
    try {
      await fetch(
        `http://localhost:5000/post/${postId}/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ postId, commentId }),
        },
      );

      const response = await fetch(`http://localhost:5000/post/${postId}`);

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const result = await response.json();

      setComments(result.results.comments);
    } catch (error) {
      console.error(`
          ${error instanceof Error ? error.message : String(error)}
        `);
    }
  };

  return (
    <div className='border-t border-gray-200 dark:border-slate-700 pt-12'>
      <div className='flex items-center gap-3 mb-8!'>
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
          className='lucide lucide-message-circle w-5 h-5 text-gray-900 dark:text-white'
          aria-hidden='true'
        >
          <path d='M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719'></path>
        </svg>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
          Comments (<span>{comments?.length}</span>)
        </h3>
      </div>

      {comments?.length !== 0 && (
        <div className='space-y-6! mb-12!'>
          {comments?.map((comment) => (
            <div
              key={comment.id}
              className='bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6!'
            >
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 font-semibold shrink-0'>
                  {comment.authorName[0].toUpperCase()}
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3 mb-2!'>
                      <span className='font-semibold text-gray-900 dark:text-white'>
                        {comment.authorName}
                      </span>
                      <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {comment.createdAt.split('T')[0]}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteComment(comment.id)}
                      className={`${isSignedIn && user.role === 'ADMIN' ? 'inline' : 'hidden'} hover:text-black cursor-pointer dark:hover:text-white text-gray-500 dark:text-gray-400`}
                    >
                      X
                    </button>
                  </div>
                  <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                    {comment.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <PostNewComment
        isSignedIn={isSignedIn}
        postId={postId}
        updateComments={updateComments}
        user={user}
      />
    </div>
  );
}

function PostNewComment({
  postId,
  updateComments,
  isSignedIn,
  user,
}: {
  postId: string;
  isSignedIn: boolean;
  updateComments: (data: Comment[]) => void;
  user: UserToken;
}) {
  const [authorName, setAuthorName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // If user is signed in set author name to signed in users username
  useEffect(() => {
    const setUserName = () => {
      if (isSignedIn) setAuthorName(user.username);
    };

    setUserName();
  });

  async function postNewComment(e: FormEvent) {
    e.preventDefault();

    try {
      await fetch(`http://localhost:5000/post/${postId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorName, content }),
      });

      const res = await fetch(`http://localhost:5000/post/${postId}`);
      const data = await res.json();

      updateComments(data.results.comments);
    } catch {
      throw new Error('Error while posting new comment');
    }

    setAuthorName('');
    setContent('');
  }

  return (
    <div className='bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6'>
      <h4 className='text-lg font-bold text-gray-900 dark:text-white mb-4!'>
        Leave a comment
      </h4>
      <form
        action={`http://localhost:5000/post/${postId}`}
        method='post'
        className='space-y-4'
        onSubmit={(e) => postNewComment(e)}
      >
        {!isSignedIn && (
          <div className='mb-6!'>
            <label
              htmlFor='author'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2!'
            >
              Name
            </label>
            <input
              type='text'
              id='author'
              onChange={(e) => setAuthorName(e.target.value)}
              value={authorName}
              className='w-full px-4 py-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-500 focus:border-transparent outline-none text-gray-900 dark:text-white'
              placeholder='Your name'
              required
            />
          </div>
        )}
        <div>
          <label
            htmlFor='content'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2!'
          >
            Comment
          </label>
          <textarea
            id='content'
            onChange={(e) => setContent(e.target.value)}
            value={content}
            rows={4}
            className='w-full px-4 py-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-500 focus:border-transparent outline-none resize-none text-gray-900 dark:text-white'
            placeholder='Write your comment...'
            required
          ></textarea>

          <button
            type='submit'
            className='flex mt-6! items-center gap-2 px-6 py-2 bg-gray-900 dark:bg-slate-700 text-white rounded-md font-medium hover:bg-gray-700 dark:hover:bg-slate-600 transition-colors'
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
              className='lucide lucide-send w-4 h-4'
              aria-hidden='true'
            >
              <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'></path>
              <path d='m21.854 2.147-10.94 10.939'></path>
            </svg>
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
