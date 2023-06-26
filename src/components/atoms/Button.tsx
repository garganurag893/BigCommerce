import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  className,
  disabled,
  isLoading = false,
  ...props
}) => (
  <button
    disabled={disabled || isLoading}
    className={`flex flex-row items-center px-4 py-2 bg-black text-white rounded-md hover:scale-105 duration-300 ${
      className || ""
    } ${disabled ? "bg-gray-400" : ""}`}
    {...props}
  >
    {isLoading && (
      <svg
        className="animate-spin h-5 w-5 mr-3 text-white"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )}
    {text}
  </button>
);

export default Button;
