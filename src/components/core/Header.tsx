import { Bars3Icon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="navbar fixed top-0 z-50 px-2 md:px-32 bg-[url('/background.webp')]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Bars3Icon strokeWidth={2} className="h-5 w-5" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex-col">
        <Link href="/" className="btn btn-ghost text-2xl text-primary font-semibold hover:bg-transparent">
          rippd
          <Image src="/logo.svg" className="w-5 h-5" alt="logo" width={20} height={20} />
        </Link>
        <p className="uppercase text-neutral-content text-xs font-semibold -mt-2">healthy recipes</p>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <MagnifyingGlassIcon strokeWidth={2} className="h-5 w-5" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BellIcon strokeWidth={2} className="h-5 w-5" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
