interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isRequired?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  isRequired = false,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label className="block">
        <span className="text-gray-300">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </span>
        <input
          {...props}
          className={`mt-1 w-full rounded-md bg-zinc-800 border ${
            error ? 'border-red-500' : 'border-zinc-700'
          } px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
