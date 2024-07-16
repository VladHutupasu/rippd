import db from '@lib/prisma';

// TODO: dynamic for blogs as done for recipes
export default async function sitemap() {
  const response = await db.recipe.findMany({
    select: {
      slug: true,
    },
  });

  const recipes = response.map(recipe => ({
    url: `https://rippd.io/recipe/${recipe.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: 'https://rippd.io/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://rippd.io/recipes/newest',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://rippd.io/recipes/crowds-favs',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://rippd.io/blog/why-is-protein-important',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://rippd.io/blog/why-control-glucose-spikes',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://rippd.io/blog/protein-calculator',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://rippd.io/blog/pantry-must-haves',
      lastModified: new Date(),
      priority: 0.8,
    },
    ...recipes,
  ];
}
