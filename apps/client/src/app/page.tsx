import CustomLink from '@/components/UI/CustomLink';
import { routes } from '@/lib/routes';

const Home = () => {
  return (
    <div className="mt-40 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Welcome to Voice to Text SaaS
      </h1>

      <p className="max-w-xl text-center text-gray-300 mb-8 leading-relaxed text-lg">
        Upload your voice recordings and get accurate transcriptions powered by
        AI. Enjoy 2 free transcriptions — then upgrade for unlimited access.
      </p>

      <div className="flex gap-4">
        <CustomLink href={routes.home} label="Get Started" styleType="white" />
        <CustomLink href={routes.login} label="Login" styleType="black" />
      </div>
    </div>
  );
};

export default Home;
