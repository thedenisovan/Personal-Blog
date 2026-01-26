import App from '../components/App';
import HomePage from '../components/homePage/HomePage';
import AboutPage from '../components/aboutPage/AboutPage';
import Signin from '../components/auth/Signin';
import ErrorElement from '../components/ErrorComponent';
import PostPage from '../components/postPage/PostPage';
import Signup from '../components/auth/Signup';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: `post/:id`,
        element: <PostPage />,
      },
    ],
  },
];

export default routes;
