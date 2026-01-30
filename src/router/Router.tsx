import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';
import Loading from '../components/Loading';

// Lazy load components
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Courses = lazy(() => import('../pages/Courses'));
const Services = lazy(() => import('../pages/Services'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const Blogs = lazy(() => import('../pages/Blogs'));
const Contact = lazy(() => import('../pages/Contact'));
const Terms = lazy(() => import('../pages/Terms'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Cookies = lazy(() => import('../pages/Cookies'));
const NotFound = lazy(() => import('../pages/NotFound'));

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, // Root level error boundary / 404
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: 'about',
        element: withSuspense(AboutUs),
      },
      {
        path: 'courses',
        element: withSuspense(Courses),
      },
      {
        path: 'services',
        element: withSuspense(Services),
      },
      {
        path: 'testimonials',
        element: withSuspense(Testimonials),
      },
      {
        path: 'blogs',
        element: withSuspense(Blogs),
      },
      {
        path: 'contact',
        element: withSuspense(Contact),
      },
      {
        path: 'terms',
        element: withSuspense(Terms),
      },
      {
        path: 'privacy',
        element: withSuspense(Privacy),
      },
      {
        path: 'cookies',
        element: withSuspense(Cookies),
      },
      {
        path: '404',
        element: withSuspense(NotFound),
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);

