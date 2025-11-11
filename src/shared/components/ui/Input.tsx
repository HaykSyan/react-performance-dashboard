interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
}
export const Input = ({
  className = "",
  disabled = false,
  ...props
}: Props) => (
  <input
    className={`border border-gray-400 ${className}`}
    disabled={disabled}
    {...props}
  />
);
