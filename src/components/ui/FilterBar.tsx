import React, { useEffect, useState } from "react";

export type Filters = {
  date?: string; // YYYY-MM-DD
  from?: string; // YYYY-MM-DD
  to?: string; // YYYY-MM-DD
  cancelled?: boolean | undefined; // undefined = todas
  page?: number;
  limit?: number;
};

type Props = {
  initial?: Filters;
  onApply: (filters: Filters) => void;
  className?: string;
  showSubmit?: boolean; // por si deseas aplicar auto en cambios; default true con botón
};

const FilterBar: React.FC<Props> = ({
  initial,
  onApply,
  className,
  showSubmit = true,
}) => {
  const [date, setDate] = useState<string>(initial?.date || "");
  const [from, setFrom] = useState<string>(initial?.from || "");
  const [to, setTo] = useState<string>(initial?.to || "");
  const [cancelled, setCancelled] = useState<string>(
    initial?.cancelled === undefined
      ? "all"
      : initial.cancelled
      ? "true"
      : "false"
  );
  const [limit, setLimit] = useState<number>(initial?.limit || 10);

  // Si quieres aplicar automáticamente al cambiar (sin botón), descomenta:
  // useEffect(() => {
  //   onApply(build());
  // }, [date, from, to, cancelled, limit]);

  const build = (): Filters => {
    // Si hay "date", ignoramos from/to por coherencia con tus endpoints
    const f: Filters = {
      page: 1, // reset de página cada vez que aplicas filtros
      limit,
    };
    if (date) {
      f.date = date;
    } else {
      if (from) f.from = from;
      if (to) f.to = to;
    }
    if (cancelled === "true") f.cancelled = true;
    else if (cancelled === "false") f.cancelled = false;
    else f.cancelled = undefined;

    return f;
  };

  const handleApply = () => onApply(build());
  const handleClear = () => {
    setDate("");
    setFrom("");
    setTo("");
    setCancelled("all");
    setLimit(10);
    onApply({ page: 1, limit: 10, cancelled: undefined });
  };

  useEffect(() => {
    // Validación simple de rango
    if (from && to && from > to) {
      // intercambia
      setFrom(to);
      setTo(from);
    }
  }, [from, to]);

  return (
    <div
      className={`bg-white rounded-3xl shadow p-4 sm:p-6 mb-6 ${
        className || ""
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Fecha exacta
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl border-gray-300 focus:ring-pink-500 focus:border-pink-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Si especificas esta fecha, se ignoran “desde” y “hasta”.
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Desde
          </label>
          <input
            type="date"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              if (date) setDate("");
            }}
            className="w-full rounded-xl border-gray-300 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Hasta
          </label>
          <input
            type="date"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              if (date) setDate("");
            }}
            className="w-full rounded-xl border-gray-300 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Estado
          </label>
          <select
            value={cancelled}
            onChange={(e) => setCancelled(e.target.value)}
            className="w-full rounded-xl border-gray-300 focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="all">Todas</option>
            <option value="false">Activas</option>
            <option value="true">Canceladas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Por página
          </label>
          <select
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value, 10))}
            className="w-full rounded-xl border-gray-300 focus:ring-pink-500 focus:border-pink-500"
          >
            {[5, 10, 20, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      {showSubmit && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={handleApply}
            className="bg-pink-600 text-white px-5 py-2.5 rounded-full font-semibold transition hover:bg-pink-700 hover:-translate-y-0.5"
          >
            Aplicar filtros
          </button>
          <button
            onClick={handleClear}
            className="px-5 py-2.5 rounded-full font-semibold transition bg-white border border-gray-300 hover:-translate-y-0.5"
          >
            Limpiar
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
