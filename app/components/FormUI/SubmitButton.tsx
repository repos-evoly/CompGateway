import React from "react";
import { useFormikContext } from "formik";
import { FC } from "react";

type SubmitButtonPropsType = {
  title: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>; // Use React's built-in SVGProps
  color?: "success" | "warning" | "error" | "primary"; // Define color options
  fullWidth?: boolean;
  adminOff?: boolean;
  isSubmitting?: boolean; // Pass as a prop to control submitting state
};

const SubmitButton = ({
  title,
  Icon,
  color = "success",
  fullWidth = true,
  adminOff = false,
  isSubmitting = false, // Default to false if not provided
}: SubmitButtonPropsType): JSX.Element => {
  const { handleSubmit } = useFormikContext();

  const handleClick = () => {
    handleSubmit();
  };

  const buttonColors = {
    success: "bg-green-500 hover:bg-green-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-black",
    error: "bg-red-500 hover:bg-red-600 text-white",
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
  };

  return (
    <div
      className={`flex ${
        fullWidth ? "w-full" : "w-auto"
      } items-center justify-center`}
    >
      <button
        type="submit"
        onClick={handleClick}
        disabled={isSubmitting || adminOff}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold transition duration-300 ${
          isSubmitting || adminOff
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : buttonColors[color]
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
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
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
              ></path>
            </svg>
            <span className="ml-2">Submitting...</span>
          </span>
        ) : (
          <>
            {title}
            <Icon className="h-5 w-5" />
          </>
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
