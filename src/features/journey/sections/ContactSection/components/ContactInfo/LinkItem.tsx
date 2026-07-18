interface LinkItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function LinkItem({ children, ...props }: LinkItemProps) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="hover:underline"
      {...props}
    >
      {children}
    </a>
  );
}
