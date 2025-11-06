type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: Props) => {
  return (
    <div className={`rounded-lg shadow bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};
