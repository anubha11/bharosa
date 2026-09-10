/** Indian-format an integer rupee amount, e.g. 1240000 -> "12,40,000". */
export function inr(n: number): string {
  return n.toLocaleString('en-IN')
}

/** Prefixed rupee string, e.g. "₹12,40,000". */
export function rupees(n: number): string {
  return `₹${inr(n)}`
}

/** Short lakh form, e.g. 1000000 -> "₹10L". Falls back to full for odd amounts. */
export function lakhs(n: number): string {
  if (n % 100000 === 0) return `₹${n / 100000}L`
  return rupees(n)
}
