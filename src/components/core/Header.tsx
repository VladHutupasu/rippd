'use client';

import { getRecipeByName } from '@actions/get-recipe';
import { Bars3Icon, HeartIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Recipe } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const isFirstRender = useRef(true);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const drawerRef = useRef<HTMLInputElement | null>(null);

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
      searchInputRef.current.focus();
      // Used for focusing input on desktop
      setTimeout(() => searchInputRef.current?.focus(), 200);
    }
  }, [shouldFocus]);

  const closeDrawer = () => {
    if (drawerRef.current) drawerRef.current.checked = false;
  };

  return (
    <div className="drawer">
      <input ref={drawerRef} id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full flex fixed top-0 z-50">
        <div className="navbar px-2 md:px-32 bg-[url('/background.webp')]">
          <div className="navbar-start">
            <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-circle btn-ghost">
              <Bars3Icon strokeWidth={2} className="h-5 w-5" />
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
          <div className="navbar-end sm:gap-2">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-circle btn-ghost"
              onClick={() => setShouldFocus(prev => !prev)}
            >
              <MagnifyingGlassIcon strokeWidth={2} className="h-5 w-5" />
            </label>
          </div>
        </div>
      </div>

      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />

        <div className="menu p-4 min-h-full min-w-full sm:min-w-96 sm:w-96 bg-base-200 gap-4">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="btn btn-sm btn-circle btn-ghost">
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </label>

          <form
            className="join pb-3"
            action={async () => {
              if (!searchValue.trim()) return;

              const recipes = await getRecipeByName(searchValue);
              recipes.map(recipe => (recipe.imageSrc = require(`@public/images/recipes/${recipe.imageSrc}`).default));
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
                onChange={e => {
                  setSearchValue(e.target.value);
                  if (!e.target.value.trim()) {
                    setSearchResults([]);
                  }
                }}
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
            <button type="submit" className="btn btn-primary join-item text-base-200">
              Search
            </button>
          </form>

          {/* Sidebar content here */}
          {searchResults.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-between">
              {searchResults.map(recipe => (
                <Link key={recipe.id} href={`/recipe/${recipe.id}`} onClick={() => closeDrawer()}>
                  <div key={recipe.id} className="flex flex-col gap-1 max-w-40">
                    <Image
                      src={recipe.imageSrc}
                      alt={recipe.description}
                      height={160}
                      width={160}
                      placeholder="blur"
                      className="h-40 w-40 object-cover rounded-md"
                    />
                    <h2 className="text-md font-medium">{recipe.name}</h2>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {searchResults.length === 0 && (
            <>
              <section>
                <p className="text-lg font-semibold">Recipes</p>
                <ul>
                  <li>
                    <a>
                      Saved recipes <HeartIcon strokeWidth={2} className="h-5 w-5 text-error" />
                    </a>
                  </li>
                  <li>
                    <a>Newest recipes</a>
                  </li>
                  <li>
                    <a>Crowd&apos;s favs</a>
                  </li>
                </ul>
              </section>

              <section>
                <p className="text-lg font-semibold">Blog</p>
                <ul>
                  <li>
                    <Link href={`/blog/why-is-protein-important`} onClick={() => closeDrawer()}>
                      Why is Protein important?
                    </Link>
                  </li>
                </ul>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
