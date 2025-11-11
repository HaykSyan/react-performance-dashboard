import { memo, type ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  className?: string;
  disabled?: boolean;
}
export const Button = memo(
  ({ children, className = "", disabled = false, ...props }: Props) => (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  )
);
