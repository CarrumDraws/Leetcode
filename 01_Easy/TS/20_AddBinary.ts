function addBinary(a: string, b: string): string {
  let i: number = a.length - 1;
  let j: number = b.length - 1;
  let carry: string = "0";
  let sum: string = "";
  while (0 <= i || 0 <= j) {
    let A: string = a[i] ? a[i] : "0";
    let B: string = b[j] ? b[j] : "0";
    sum = String(Number(A) ^ Number(B) ^ Number(carry)) + sum;
    if (A === B && A !== carry) {
      carry = carry === "0" ? "1" : "0";
    }
    i--;
    j--;
  }
  return carry === "1" ? carry + sum : sum; // Add a 1
}
// sum is XOR, newCarry = carry except when (a = b) != carry
// a  b  carry  sum  newCarry
// 0  0    0     0      0
// 1  0    0     1      0
// 0  1    0     1      0
// 0  0    1     1      0
// 0  1    1     0      1
// 1  0    1     0      1
// 1  1    0     0      1
// 1  1    1     1      1
