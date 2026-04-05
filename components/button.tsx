import Link from "next/link";

type ButtonProps = {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

const variantClasses: Record<ButtonProps["variant"], string> = {
  primary:
    "bg-accent text-white font-bold rounded-full px-8 py-3.5 border-2 border-accent hover:translate-y-[-2px] hover:shadow-lg",
  secondary:
    "border-2 border-border text-foreground font-bold rounded-full px-8 py-3.5 hover:border-foreground",
};

export default function Button({
  href,
  variant,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-heading text-sm transition-all duration-250 ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
