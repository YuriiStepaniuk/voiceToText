import Link from 'next/link';
import clsx from 'clsx';

interface CustomLinkProps {
  href: string;
  isActive?: boolean;
  styleType: 'black' | 'white';
  label: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  isActive,
  styleType,
  label,
}) => {
  const blackStyle = 'border-white text-white hover:bg-white/20';
  const whiteStyle = 'bg-white text-black hover:bg-gray-200';

  return (
    <Link href={href}>
      <span
        className={clsx(
          'px-6 py-3 rounded-md transition hover:underline border',
          isActive && 'font-medium text-white/90 underline',
          styleType === 'black' ? blackStyle : whiteStyle
        )}
      >
        {label}
      </span>
    </Link>
  );
};

export default CustomLink;
