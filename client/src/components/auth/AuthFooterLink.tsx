import { routes } from '@/lib/routes';
import Link from 'next/link';

interface AuthFooterLinkProps {
  haveAccount: boolean;
}

const AuthFooterLink: React.FC<AuthFooterLinkProps> = ({ haveAccount }) => {
  return (
    <div className="text-center text-gray-400 mt-4">
      {haveAccount ? 'Already have an account? ' : `Don't have an account? `}
      <Link
        href={haveAccount ? routes.signIn : routes.signUp}
        className="text-white hover:text-gray-300 hover:underline"
      >
        {haveAccount ? 'Login' : 'Register'}
      </Link>
    </div>
  );
};

export default AuthFooterLink;
