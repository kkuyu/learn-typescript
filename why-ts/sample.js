function sum(a, b) {
  return a + b;
}

var result = sum(10, 20);
result.toLocaleString();

// @ts-check
/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sumJSDOC(a, b) {
  return a + b;
}

var resultJSDOC = sumJSDOC(10, 20);
