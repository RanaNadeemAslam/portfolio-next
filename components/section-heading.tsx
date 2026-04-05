type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-tight mb-15">
      {children}
    </h2>
  );
}
