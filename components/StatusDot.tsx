export function StatusDot({
  color = "shipped",
}: {
  color?: "shipped" | "signal" | "muted" | "completed";
}) {
  const colorMap = {
    shipped: "bg-shipped",
    signal: "bg-signal",
    muted: "bg-muted",
    completed: "bg-shipped",
  };

  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${colorMap[color]}`} />;
}
