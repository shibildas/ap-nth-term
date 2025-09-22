/**
 * Find nth term of arithmetic progression from given array
 * @param arr - array containing at least 2 terms of AP
 * @param n - nth term to find (1-based)
 * @returns nth term of AP
 */
export function findNthAP(arr: number[], n: number): number {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Array must have at least two numbers of an arithmetic progression");
  }
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer");
  }

  const a = arr[0]; // first term
  const secondTerm = arr[1];
  if (a === undefined || secondTerm === undefined) {
    throw new Error("Array must have at least two defined numbers of an arithmetic progression");
  }
  const d = secondTerm - a; // common difference

  return a + (n - 1) * d;
}