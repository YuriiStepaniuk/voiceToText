'use client';
import Image from 'next/image';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { routes } from '@/lib/routes';
import CustomLink from '../UI/CustomLink';

const Header = () => {
  const { isSignedIn, user } = useUser();

  const userCredits =
    typeof user?.publicMetadata?.credits === 'number'
      ? user.publicMetadata.credits
      : undefined;

  return (
    <header className="bg-gradient-to-b from-zinc-900 to-black text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link href={routes.home} className="flex items-center gap-3 group">
          <Image
            src="/main.png"
            alt="Voice to Text Logo"
            width={32}
            height={32}
            className="transition-transform group-hover:scale-110"
          />
          <span className="text-lg font-medium group-hover:text-blue-400 transition-colors">
            Voice to Text
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <CustomLink
                href={routes.dashboard}
                label="Dashboard"
                styleType="black"
              />
              <div className="flex items-center gap-2">
                {userCredits !== undefined && (
                  <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm">
                    Credits: {userCredits}
                  </span>
                )}
                <UserButton afterSignOutUrl="/" />
              </div>
            </>
          ) : (
            <>
              <CustomLink
                href={routes.signIn}
                label="Sign In"
                styleType="black"
              />
              <CustomLink
                href={routes.signUp}
                label="Get Started"
                styleType="white"
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
