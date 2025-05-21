export function Input({ className = '', ...props }) {
  return <input className={`w-full rounded-xl border p-3 shadow-sm ${className}`} {...props} />;
}