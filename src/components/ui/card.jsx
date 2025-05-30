export function Card({ children }) {
  return <div className="rounded-2xl border bg-white shadow">{children}</div>;
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}