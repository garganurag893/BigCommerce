import { InputHTMLAttributes, FC } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  grid?: 1 | 2 | 3;
  error?: string;
}

const Input: FC<InputProps> = ({
  label,
  helperText,
  grid = 1,
  error,
  ...props
}) => {
  let gridWidth = "";
  if (grid === 2) {
    gridWidth = "md:w-1/2";
  } else if (grid === 3) {
    gridWidth = "md:w-1/3";
  }
  return (
    <div className={`w-full px-3 mb-4 md:mb-0 ${gridWidth}`}>
      {label && (
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
          !!error ? "border border-red-500" : ""
        }`}
        {...props}
      />
      {helperText && (
        <p className="text-gray-600 text-xs italic">{helperText}</p>
      )}
      {!!error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default Input;
