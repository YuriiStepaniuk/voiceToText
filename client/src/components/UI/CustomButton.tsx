import clsx from 'clsx';

interface CustomButtonProps {
  btnName: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  btnName,
  className,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'w-full py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition cursor-pointer',
        className
      )}
    >
      {btnName}
    </button>
  );
};

export default CustomButton;
