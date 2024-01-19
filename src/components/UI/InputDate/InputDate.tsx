import { FC } from "react";

interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
}

const InputDate: FC<InputDateProps> = ({
  htmlFor,
  placeholder,
  required,
  children,
  ...otherProps
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {children}
      </label>
      <input
        type="date"
        id={htmlFor}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
        {...otherProps}
      />
    </div>
  );
};

export default InputDate;
