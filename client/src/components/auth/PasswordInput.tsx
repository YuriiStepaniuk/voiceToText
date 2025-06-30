import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isRequired?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  isRequired = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block">
        <span className="text-gray-300">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </span>
        <div className="relative">
          <input
            {...props}
            type={showPassword ? 'text' : 'password'}
            className={`mt-1 w-full rounded-md bg-zinc-800 border ${
              error ? 'border-red-500' : 'border-zinc-700'
            } px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10`}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <IoMdEyeOff size={18} /> : <IoMdEye size={18} />}
          </button>
        </div>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
