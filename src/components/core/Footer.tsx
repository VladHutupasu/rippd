import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer footer-center mt-24 p-3 md:p-4 bg-base-200 text-base-content font-medium">
      <aside>
        <p>
          Copyright © 2024 - All rights reserved by
          <span className="text-primary text-base font-semibold inline-flex items-center gap-1 mx-1">
            rippd
            <Image src="/logo.svg" className="w-4 h-4 inline" alt="logo" width={20} height={20} />
          </span>
        </p>
      </aside>
    </footer>
  );
}
