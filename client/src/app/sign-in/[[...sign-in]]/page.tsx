import { SignIn } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn path="/sign-in" />
    </div>
  );
};

export default Page;
