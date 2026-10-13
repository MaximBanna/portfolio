function Button({ href, variant = "primary", children }) {
  const styles = {
    primary: "bg-neutral-100 text-neutral-950 hover:bg-white",
    secondary: "border border-neutral-800 hover:border-neutral-600",
  };
  return (
    <a
      href={href}
      className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
export default Button;
