import NotFoundImage from '@public/images/not-found.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center ">
      <div>
        <Image
          src={NotFoundImage}
          className="rounded-md w-[250px] h-[250px] m-0 lg:hidden"
          alt="Page not found"
          width={250}
          height={250}
        />

        <Image
          src={NotFoundImage}
          className="rounded-md w-[400px] h-[400px] hidden m-0 lg:block"
          alt="Page not found"
          width={400}
          height={400}
        />
      </div>
      <h2 className="font-semibold text-2xl mb-4">Page Not Found</h2>

      <Link href="/">
        <button className="btn btn-neutral">Return Home</button>
      </Link>
    </div>
  );
}
