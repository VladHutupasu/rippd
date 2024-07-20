import NotFound from '@core/NotFound';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipe not found',
  description: 'The recipe you are looking for does not exist. Please check the URL or check out all of our recipes.',
  keywords: [],
};

export default function RecipeNotFound() {
  return <NotFound title="Recipe Not Found" linkText="Check out all recipes" linkUrl="/recipes/all" />;
}
