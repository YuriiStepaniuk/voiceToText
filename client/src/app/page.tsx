import { currentUser } from '@clerk/nextjs/server';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import CustomLink from '@/components/UI/CustomLink';
import { routes } from '@/lib/routes';

export default async function Home() {
  const user = await currentUser();

  const userFirstName = user?.firstName ?? '';
  const userCredits =
    typeof user?.publicMetadata?.credits === 'number'
      ? user.publicMetadata.credits
      : 0;

  return (
    <div className="min-h-screen">
      <main className="mt-40 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold mb-6 text-center">
          Welcome{user ? ` back, ${userFirstName}` : ''} to Voice to Text SaaS
        </h1>

        <p className="max-w-xl text-center text-gray-300 mb-8 leading-relaxed text-lg">
          Upload your voice recordings and get accurate transcriptions powered
          by AI. Enjoy 2 free transcriptions — then upgrade for unlimited
          access.
        </p>

        <SignedOut>
          <div className="flex gap-4">
            <CustomLink
              href={routes.signUp}
              label="Get Started"
              styleType="white"
            />
            <CustomLink href={routes.signIn} label="Login" styleType="black" />
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex gap-4 items-center">
            <CustomLink
              href={routes.dashboard}
              label="Go to Dashboard"
              styleType="white"
            />
            <span className="bg-zinc-800 text-white px-4 py-2 rounded-md">
              Credits: {userCredits}
            </span>
          </div>
        </SignedIn>
      </main>
    </div>
  );
}
