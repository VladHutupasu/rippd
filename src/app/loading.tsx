import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center h-screen -mt-28 sm:-mt-36">
      <Image src="/logo.svg" className="w-14 h-14 motion-safe:animate-ping" alt="logo" width={56} height={56} />
    </div>
  );
}
