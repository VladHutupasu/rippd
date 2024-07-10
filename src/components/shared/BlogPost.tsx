import Image, { StaticImageData } from 'next/image';

export default function BlogPost({
  title,
  image,
  children,
}: {
  title: string;
  image: StaticImageData;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <article className="prose max-w-none">
        <div className="flex flex-col lg:flex-row items-center">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold">{title}</h1>
          <Image
            src={image}
            className="rounded-md w-[250px] h-[250px] m-0 lg:hidden"
            alt="Blog post image"
            width={250}
            height={250}
          />

          <Image
            src={image}
            className="rounded-md w-[400px] h-[400px] hidden m-0 lg:block"
            alt="Blog post image"
            width={400}
            height={400}
          />
        </div>
        {children}
      </article>
    </div>
  );
}
