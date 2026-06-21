export function StatusDot({
  color = "shipped",
}: {
  color?: "shipped" | "signal" | "muted";
}) {
  const colorMap = {
    shipped: "bg-shipped",
    signal: "bg-signal",
    muted: "bg-muted",
  };

  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${colorMap[color]}`} />;
}
