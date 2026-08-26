type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (name: string, value: string) => void;
  as?: "input" | "textarea";
};

export default function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  placeholder,
  required,
  onChange,
  as = "input",
}: FormFieldProps) {
  const inputClasses =
    "w-full rounded-card border border-slate-300 px-4 py-3 text-sm md:text-base text-midnight placeholder:text-slate-400 focus:border-brand-cyan focus:outline-none";

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-midnight">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          onChange={(e) => onChange(name, e.target.value)}
          className={inputClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          onChange={(e) => onChange(name, e.target.value)}
          className={inputClasses}
        />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
