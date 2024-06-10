'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Recipe } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function RecipeImageCarousel({ recipes }: { recipes: Recipe[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (!carouselRef.current) return;
    setIsAtStart(carouselRef.current.scrollLeft === 0);
    setIsAtEnd(carouselRef.current.scrollWidth - carouselRef.current.scrollLeft === carouselRef.current.clientWidth);
    console.log(`Checking scroll position! isAtStart: ${carouselRef.current.scrollLeft}, isAtEnd: ${isAtEnd}`);
  };

  const scroll = (scrollOffset: number) => {
    carouselRef.current?.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    checkScrollPosition();
    carouselRef.current?.addEventListener('scroll', checkScrollPosition);
    return () => {
      carouselRef.current?.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      <div className="flex justify-end opacity-60">
        <ChevronLeftIcon
          onClick={() => scroll(-300)}
          strokeWidth={2}
          className={`h-5 w-5 inline-block cursor-pointer ${isAtStart ? 'opacity-30' : ''}`}
        />
        <ChevronRightIcon
          onClick={() => scroll(300)}
          strokeWidth={2}
          className={`h-5 w-5 inline-block cursor-pointer ${isAtEnd ? 'opacity-30' : ''}`}
        />
      </div>
      <div>
        <p>{`Scroll width ${carouselRef.current?.scrollWidth} - Scroll left ${carouselRef.current?.scrollLeft} = Client width ${carouselRef.current?.clientWidth}`}</p>
      </div>
      <div ref={carouselRef} className="carousel carousel-center max-w-full p-4 pl-0 space-x-4 bg-transparent">
        {recipes.map(recipe => (
          <div key={recipe.id} className="carousel-item">
            <Link href={`recipe/${recipe.id}`} className="flex flex-col items-start gap-1">
              <Image
                src={recipe.imageSrc}
                className="rounded-md object-cover h-44 sm:hidden"
                alt={recipe.description}
                placeholder="blur"
                width={176}
                height={176}
              />

              <Image
                src={recipe.imageSrc}
                className="rounded-md object-cover h-56 hidden sm:block"
                alt={recipe.description}
                placeholder="blur"
                height={224}
                width={224}
              />
              {/* TODO: Fix word wrap if this is too long */}
              <p className="font-medium text-center text-sm">{recipe.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
