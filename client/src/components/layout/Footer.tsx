import CustomLink from '../UI/CustomLink';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-zinc-900 to-black text-white">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Voice to Text. All rights reserved.
        </div>

        <div className="flex gap-4">
          <CustomLink
            href="https://github.com/YuriiStepaniuk/voiceToText"
            label="GitHub"
            styleType="white"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
