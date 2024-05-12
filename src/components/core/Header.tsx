'use client';

import { Bars3Icon, BellIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searching, setSearching] = useState(false);
  const [shouldFocus, setShouldFocus] = useState(false);

  useEffect(() => {
    setShouldFocus(true);
  }, [searching]);

  useEffect(() => {
    if (shouldFocus) {
      searchInputRef.current?.focus();
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
            <p className="uppercase text-neutral-content text-xs font-semibold -mt-2">healthy recipes</p>
          </div>
          <div className="navbar-end">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-circle btn-ghost"
              onClick={() => setSearching(!searching)}
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
          <div className="join">
            <input
              ref={searchInputRef}
              className="input input-bordered w-full join-item focus:outline-none"
              placeholder="Today I'm cooking.."
            />
            <button className="btn join-item rounded-r-full bg-primary text-base-200">Search</button>
          </div>
          {/* Sidebar content here */}
          <ul>
            <li>
              <a className="pl-2">Newest recipes</a>
            </li>
            <li>
              <a className="pl-2">Crowd&apos;s favs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
