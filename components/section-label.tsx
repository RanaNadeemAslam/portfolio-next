type SectionLabelProps = {
  children: React.ReactNode;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="text-[0.78rem] font-bold uppercase tracking-[2.5px] text-text-muted mb-8">
      {children}
    </div>
  );
}
