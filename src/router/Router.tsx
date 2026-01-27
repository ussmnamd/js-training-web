import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Courses from '../pages/Courses';
import Services from '../pages/Services';
import Testimonials from '../pages/Testimonials';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

