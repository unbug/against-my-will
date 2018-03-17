'use strict';


let totalPain = 0;

/**
 *
 * Have you been forced to make code changes against your will?
 * You're not alone!
 * Please never forget you have the right to tell the truth.
 * Import this code to you project is a way to get started.
 *
 * @param {number} pain The number to represent your pain, default 1.
 * @return {number} The total number to represent your pain.
 * @example
 * import AMW from 'against-my-will';
 * if (AMW(99)) {
 * // TODO This code change is against my will
 * }
 */
export default function againstMyWill(pain) {
  totalPain += pain || 1;
  return totalPain;
};
