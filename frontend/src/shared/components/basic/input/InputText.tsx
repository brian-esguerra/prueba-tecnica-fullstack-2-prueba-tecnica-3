import { FC } from 'react';

interface InputProps {
  errors?: any;
  label: string;
  name?: string;
  onChange?: any;
  register?: any;
  type: string;
  defaultValue?: any;
  disabled?: boolean;
  minValue?: string;
  maxValue?: string;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type,
  defaultValue,
  onChange,
  errors,
  register,
  disabled,
  minValue,
  maxValue,
}) => {

  // tslint:disable-next-line: prettier
  const error = errors?.[name]?.message;
  return (
    <>
      <div className="sm:col-span-4">
      <label htmlFor={label} className="block text-sm font-medium leading-5 text-gray-700">{label}</label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input
              defaultValue={defaultValue}
              className="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              name={name}
              {...(register && name ? register(name) : {})}
              type={type}
              onChange={onChange}
              placeholder={label}
              disabled={disabled}
              min={minValue}
              max={maxValue}
            />
          </div>
          {error && (
            <p className="mt-1 text-red-500 text-xs italic">{error}</p>
          )}
      </div>
    </>
  );
};

export default Input;