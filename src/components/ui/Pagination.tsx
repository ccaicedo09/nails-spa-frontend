import React from "react";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

const Pagination: React.FC<Props> = ({
  page,
  totalPages,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  const go = (p: number) => {
    const next = Math.max(1, Math.min(totalPages, p));
    if (next !== page) onPageChange(next);
  };

  // ventanas cortas de páginas (actual +/- 2)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2
  );

  const withEllipsis: (number | "...")[] = [];
  for (let i = 0; i < pages.length; i++) {
    withEllipsis.push(pages[i]);
    if (i < pages.length - 1 && pages[i + 1] - pages[i] > 1) {
      withEllipsis.push("...");
    }
  }

  return (
    <nav
      className={`flex items-center justify-center gap-2 ${className || ""}`}
      aria-label="Paginación"
    >
      <button
        onClick={() => go(page - 1)}
        disabled={page <= 1}
        className="px-3 py-2 rounded-full bg-white shadow text-gray-700 disabled:opacity-50 hover:-translate-y-0.5 transition"
      >
        Anterior
      </button>

      {withEllipsis.map((p, idx) =>
        p === "..." ? (
          <span key={`dots-${idx}`} className="px-2 text-gray-500 select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => go(p as number)}
            aria-current={p === page ? "page" : undefined}
            className={`min-w-10 px-3 py-2 rounded-full transition shadow ${
              p === page
                ? "bg-pink-600 text-white"
                : "bg-white text-gray-700 hover:-translate-y-0.5"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => go(page + 1)}
        disabled={page >= totalPages}
        className="px-3 py-2 rounded-full bg-white shadow text-gray-700 disabled:opacity-50 hover:-translate-y-0.5 transition"
      >
        Siguiente
      </button>
    </nav>
  );
};

export default Pagination;
