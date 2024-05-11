import { Recipe } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function LatestRecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`recipe/${recipe.id}`}>
      <div className="card card-compact w-full h-72 bg-base-100 drop-shadow rounded-md">
        <figure>
          <Image
            src={recipe.imageSrc}
            className="w-full h-full object-cover"
            alt={recipe.description}
            placeholder="blur"
            width={358}
            height={196}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">New!</h2>
          <p className="font-normal opacity-60">{recipe.name}</p>
        </div>
      </div>
    </Link>
  );
}
