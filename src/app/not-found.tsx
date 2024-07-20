import NotFound from '@core/NotFound';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist. Please check the URL or go back to the homepage.',
  keywords: [],
};

export default function PageNotFound() {
  return <NotFound title="Page Not Found" linkText="Go to Homepage" linkUrl="/" />;
}
