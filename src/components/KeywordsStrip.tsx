import { industryKeywords } from "../data/portfolio";

export function KeywordsStrip() {
  return (
    <section aria-label="Technical expertise keywords" className="border-y border-line px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-[10px] font-semibold tracking-[0.25em] uppercase text-dim">
          Core Competencies
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {industryKeywords.map((keyword) => (
            <span key={keyword} className="keyword-pill">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
