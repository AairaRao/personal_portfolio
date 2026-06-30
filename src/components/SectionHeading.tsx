interface SectionHeadingProps {
  num: string;
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  num,
  tag,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="font-serif text-sm font-medium text-gold/60">{num}</p>
      <span className="section-tag mt-4">{tag}</span>
      <h2 className="font-serif mt-6 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>
      )}
      <div className={`divider-glow mt-8 ${align === "center" ? "mx-auto w-32" : "w-24"}`} />
    </div>
  );
}
