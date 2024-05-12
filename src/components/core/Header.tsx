'use client';

import { Bars3Icon, BellIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Recipe } from '@prisma/client';
import { getRecipeByName } from '@shared/app/actions/get-recipe';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const isFirstRender = useRef(true);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [shouldFocus, setShouldFocus] = useState<null | boolean>(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);

  useEffect(() => {
    // Prevent modal to show up on component mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (searchInputRef.current && shouldFocus !== null) {
      console.log('focusing', shouldFocus);
      searchInputRef.current.focus();
      // Used for focusing input on desktop
      setTimeout(() => searchInputRef.current?.focus(), 200);
    }
  }, [shouldFocus]);

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full flex fixed top-0 z-50">
        <div className="navbar px-2 md:px-32 bg-[url('/background.webp')]">
          <div className="navbar-start">
            <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-circle btn-ghost">
              <Bars3Icon className="h-5 w-5" />
            </label>
          </div>
          <div className="navbar-center flex-col">
            <Link
              href="/"
              className="btn btn-ghost no-animation text-2xl text-primary font-semibold hover:bg-transparent"
            >
              rippd
              <Image src="/logo.svg" className="w-5 h-5" alt="logo" width={20} height={20} />
            </Link>
            <p className="uppercase opacity-50 text-xs font-semibold -mt-2">healthy recipes</p>
          </div>
          <div className="navbar-end">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-circle btn-ghost"
              onClick={() => setShouldFocus(prev => !prev)}
            >
              <MagnifyingGlassIcon strokeWidth={2} className="h-5 w-5" />
            </label>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BellIcon strokeWidth={2} className="h-5 w-5" />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <div className="menu p-4 min-h-full min-w-full sm:min-w-96 bg-base-200 gap-4">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="btn btn-sm btn-circle btn-ghost">
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </label>

          <form
            className="join"
            action={async () => {
              if (!searchValue.trim()) return;
              console.log('searching', searchValue);

              const recipes = await getRecipeByName(searchValue);
              recipes.map(recipe => (recipe.imageSrc = require(`../../../public/recipes/${recipe.imageSrc}`).default));
              setSearchResults(recipes);
            }}
          >
            <label className="input input-bordered w-full join-item flex items-center gap-2 focus-within:outline-none">
              <input
                ref={searchInputRef}
                type="text"
                className="w-full"
                placeholder="Today I'm cooking.."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />

              {searchValue && (
                <XMarkIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => {
                    setSearchValue('');
                    setSearchResults([]);
                  }}
                />
              )}
            </label>
            <button type="submit" className="btn btn-primary join-item rounded-r-full text-base-200">
              Search
            </button>
          </form>

          {/* Sidebar content here */}
          {searchResults.length > 0 && (
            <div className="flex flex-col items-start gap-4">
              {searchResults.map(recipe => (
                <Link key={recipe.id} href={`recipe/${recipe.id}`}>
                  <div className="flex flex-col h-56 w-56">
                    <Image
                      src={recipe.imageSrc}
                      alt={recipe.description}
                      height={224}
                      width={224}
                      placeholder="blur"
                      className="grow h-20 object-cover rounded-md"
                    />
                    <h2 className="text-md font-medium">{recipe.name}</h2>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {searchResults.length === 0 && (
            <ul>
              <li>
                <a className="pl-2">Newest recipes</a>
              </li>
              <li>
                <a className="pl-2">Crowd&apos;s favs</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
