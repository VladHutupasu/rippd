import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center h-screen -mt-28 sm:-mt-36">
      <h2 className="flex items-center font-semibold text-2xl mb-4">
        Page Not Found &nbsp; <FaceFrownIcon strokeWidth={2} className="h-6 w-6 inline-block" />
      </h2>
      <Link href="/">
        <button className="btn btn-sm btn-primary">Return Home</button>
      </Link>
    </div>
  );
}
