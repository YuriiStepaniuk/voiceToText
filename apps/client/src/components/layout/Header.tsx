import Image from 'next/image';
import CustomLink from '../UI/CustomLink';
import { routes } from '@/lib/routes';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-zinc-900 to-black text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left side: Logo + Name */}
        <div className="flex items-center gap-3">
          <Link href={routes.home}>
            <Image
              src="/main.png"
              alt="main-logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </Link>
          <Link href={routes.home}>
            <span className="px-6 py-3 rounded-md transition hover:underline">
              Voice to Text
            </span>
          </Link>
        </div>

        {/* Right side: Buttons */}
        <div className="flex items-center gap-4">
          <CustomLink
            href={routes.dashboard}
            label="Dashboard"
            styleType="black"
          />

          <CustomLink href={routes.login} label="Login" styleType="black" />

          <CustomLink
            href={routes.home}
            label="Get started"
            styleType="white"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
