"use client";
import * as React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <>
        <div className="w-full">
          <div className="xl:mx-5">
            <input
              className="p-4 bg-[#FBF9F9] text-lg w-full h-fit my-3 "
              placeholder=" "
              type={type}
              ref={ref}
              {...props}
            />
          </div>
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
