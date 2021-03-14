export function formatPrice(value) {
  const fixed = value.toFixed(2);
  const asStr = String(fixed);
  const [integerPart, decimalPart] = asStr.split(".");
  return `${integerPart || "0"},${decimalPart || "00"} €`;
}