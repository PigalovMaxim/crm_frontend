import React, { ForwardedRef } from "react";
import classNames from "classnames";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  customStyles?: string;
  containerClassnames?: string;
};

function Input(p: Props, _: ForwardedRef<HTMLInputElement>) {
  const { error, customStyles, containerClassnames, ...inputProps } = p;
  return (
    <div className={classNames("flex flex-col w-full", containerClassnames)}>
      {p.name && (
        <span className="text-white text-lg capitalize mb-4">{p.name}</span>
      )}
      <input
        className={classNames(
          "w-full h-10 bg-transparent border rounded-lg text-white px-4 outline-none",
          customStyles,
          {
            'border-c-red': error,
            'border-white': !error,
          }
        )}
        {...inputProps}
      />
      {error && <span className="text-white mt-2">{error}</span>}
    </div>
  );
}

export default React.forwardRef(Input);
