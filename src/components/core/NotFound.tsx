import NotFoundImage from '@public/images/not-found.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound({ title, linkText, linkUrl }: { title: string; linkText: string; linkUrl: string }) {
  return (
    <div className="flex flex-col flex-grow items-center justify-center ">
      <div>
        <Image
          src={NotFoundImage}
          className="rounded-md w-[250px] h-[250px] m-0 lg:hidden"
          alt={title}
          width={250}
          height={250}
        />

        <Image
          src={NotFoundImage}
          className="rounded-md w-[400px] h-[400px] hidden m-0 lg:block"
          alt={title}
          width={400}
          height={400}
        />
      </div>
      <h2 className="font-semibold text-2xl mb-4">{title}</h2>

      <Link href={linkUrl}>
        <button className="btn btn-neutral">{linkText}</button>
      </Link>
    </div>
  );
}
