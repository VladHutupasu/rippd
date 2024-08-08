import InfoAndMacros from '@features/recipe/InfoAndMacros';
import Ingredients from '@features/recipe/Ingredients';
import InstructionsAndTips from '@features/recipe/InstructionsAndTips';
import Tags from '@features/recipe/Tags';
import db from '@lib/prisma';
import { Ingredient, Instructions, Macros, Recipe, RecipeIngredient } from '@prisma/client';
import { calculateMacros, generateJSONLD } from '@shared/utils/recipeUtils';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const recipeNotFoundMetadata = {
    title: 'Recipe not found',
    description: 'The recipe you are looking for does not exist.',
    keywords: [],
  };

  try {
    const response = await db.recipe.findUnique({
      where: {
        slug: params.slug,
      },
      select: {
        name: true,
        description: true,
        imageSrc: true,
      },
    });

    if (!response) {
      return recipeNotFoundMetadata;
    }

    return {
      title: response.name,
      description: response.description,
      openGraph: {
        title: `${response.name} | Rippd Healthy & High Protein Recipes`,
        description: response.description,
        url: `https://rippd.io/recipe/${params.slug}`,
        type: 'website',
        images: [
          {
            url: `https://rippd.io/images/recipes/${response.imageSrc}`,
            width: 1024,
            height: 1024,
            alt: response.name,
          },
        ],
        siteName: 'Rippd',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Rippd - Healthy & High Protein Recipes',

        description:
          'Discover healthy and high protein recipes on Rippd. Stay fit with delicious and nutritious meals. Explore our blog for additional tips on food and nutrition.',
        images: [
          {
            url: `https://rippd.io/images/recipes/${response.imageSrc}`,
            width: 1024,
            height: 1024,
            alt: response.name,
          },
        ],
      },
      alternates: {
        canonical: `https://rippd.io/recipe/${params.slug}`,
      },
    };
  } catch (error: unknown) {
    console.error('Recipe not found', error);
    return recipeNotFoundMetadata;
  }
}

/**
 * Function to generate static pages on build
 * @returns a list of `params` to populate the [slug] dynamic segment
/**
 */
export async function generateStaticParams() {
  const recipeSlugs = await db.recipe.findMany({
    select: {
      slug: true,
    },
  });
  return recipeSlugs.map(recipeSlug => ({
    slug: recipeSlug.slug,
  }));
}

export type RecipeDetails = Recipe & {
  Instructions: Instructions | null;
  RecipeIngredient: (RecipeIngredient & { Ingredient: Ingredient & { Macros: Macros | null } })[];
};

export default async function RecipeDetails({ params }: { params: { slug: string } }) {
  let recipe: RecipeDetails | null = null;

  try {
    recipe = await db.recipe.findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        Instructions: true,
        RecipeIngredient: {
          include: {
            Ingredient: {
              include: {
                Macros: true,
              },
            },
          },
        },
      },
    });
  } catch (error: unknown) {
    console.error('Unable to fetch recipe - ', error);
  }

  if (!recipe) {
    notFound();
  }

  const recipeImage: StaticImageData = require(`@public/images/recipes/${recipe.imageSrc}`).default;

  // Calculate macros
  const macrosPerServing = calculateMacros(recipe.RecipeIngredient, recipe.servings);

  // Generate JSON-LD schema
  const jsonLd = generateJSONLD(recipeImage, recipe, macrosPerServing);

  return (
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TODO: General component for this */}
      <div className="text-xs font-light opacity-60 breadcrumbs sm:mb-4">
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>Recipes</Link>
          </li>
          <li>{recipe.name}</li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <Image
          src={recipeImage}
          className="h-72 w-full object-cover absolute inset-0 mt-[8.7rem] sm:hidden"
          alt={recipe.description}
          height={288}
          width={414}
          placeholder="blur"
        />

        <Image
          src={recipeImage}
          className="h-96 w-full lg:w-80 min-w-80 object-cover rounded-md hidden sm:block"
          alt={recipe.description}
          height={384}
          width={320}
          placeholder="blur"
        />

        <InfoAndMacros recipe={recipe} macrosPerServing={macrosPerServing} />
      </div>

      {/* Tags */}
      <Tags tags={recipe.tags} />

      {/* Ingredients */}
      <Ingredients recipe={recipe} />

      {/* Instructions & Tips */}
      <InstructionsAndTips recipeInstructions={recipe.Instructions} />
    </section>
  );
}
