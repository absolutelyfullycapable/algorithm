/*
 *
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 *
 */

// 내 풀이
function solution(n) {
  let squareRoot = Math.sqrt(n);

  if (Number.isInteger(squareRoot)) {
    return (squareRoot + 1) * (squareRoot + 1);
    // return Math.pow(squareRoot + 1, 2); <- 이렇게 바꿀 수 있을 듯!!
  } else {
    return -1;
  }
}

// 인상 깊은 다른 풀이 1 (문제 개편으로 수정함! 원래 정수 x의 제곱이 아니라면 -1이 아닌 "no"를 출력)
function nextSqaure(n) {
  switch (n % Math.sqrt(n)){
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no"
  }
}

// 인상 깊은 다른 풀이 2 (문제 개편으로 수정함! 원래 정수 x의 제곱이 아니라면 -1이 아닌 "no"를 출력)
function nextSqaure(n) {
  var result = 0;
  var n = Math.sqrt(n);

  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : 'no';

  return result;
}
