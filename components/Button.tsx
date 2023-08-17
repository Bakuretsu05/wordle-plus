import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

type Props = {
  secondary?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { secondary, className, children, ...rest } = props;

  return (
    <button
      className={`h-20 w-52 rounded-full text-3xl font-bold ${
        secondary
          ? "border border-black text-black bg-transparent"
          : "text-white bg-black"
      } ${className ? className : ""}`}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
