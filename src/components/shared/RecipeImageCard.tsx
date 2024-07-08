import { Recipe } from '@prisma/client';
import GlutenFreeIcon from '@public/images/tags/gluten-free.svg';
import HighProteinIcon from '@public/images/tags/high-protein.svg';
import VeganIcon from '@public/images/tags/vegan.svg';
import VegetarianIcon from '@public/images/tags/vegetarian.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipeImageCard({ recipe, size }: { recipe: Recipe; size: 'small' | 'normal' }) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className={`flex flex-col items-start gap-1 ${
        size === 'small' ? 'max-w-[170px]' : 'max-w-[208px]'
      } sm:max-w-[256px]`}
    >
      <Image
        src={recipe.imageSrc}
        className={`rounded-md object-cover ${size === 'small' ? 'h-[170px]' : 'h-[208px]'} ${
          size === 'small' ? 'w-[170px]' : 'w-[208px]'
        } sm:hidden`}
        alt={recipe.description}
        placeholder="blur"
        width={208}
        height={208}
      />

      <Image
        src={recipe.imageSrc}
        className="rounded-md object-cover h-[256px] w-[256px] hidden sm:block"
        alt={recipe.description}
        placeholder="blur"
        height={256}
        width={256}
      />
      <p className="font-medium text-sm lg:text-base">{recipe.name}</p>
      <div className="flex gap-2">
        {/* TODO add icons based on tags */}
        {/* {recipe.tags.map(tag => (
                  <span key={tag} className="text-xs lg:text-sm font-medium bg-gray-200 p-1 rounded-md">
                    {tag}
                  </span>
                ))} */}
        <Image className="h-5 w-5 opacity-40" src={GlutenFreeIcon} alt="gluten-free" width={20} height={20} />
        <Image className="h-5 w-5 opacity-40" src={VeganIcon} alt="vegan" width={20} height={20} />
        <Image className="h-5 w-5 opacity-40" src={VegetarianIcon} alt="vegeterian" width={20} height={20} />
        <Image className="h-5 w-5 opacity-40" src={HighProteinIcon} alt="high-protein" width={20} height={20} />
      </div>
    </Link>
  );
}
