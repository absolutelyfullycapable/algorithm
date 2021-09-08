// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 내 풀이
function solution(n) {
  let numbers;
  let answer;

  numbers = String(n).split("");
  answer = Number(numbers.sort((a, b) => b - a).join(""));

  return answer;
}

// 인상 깊은 다른 풀이 1
function solution(n) {
  let newN = n + "";
  let newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}

// 인상 깊은 다른 풀이 2
function solution(n) {
  return parseInt((n + "").split("").sort().reverse().join(""));
}

// 풀이 방법은 다 비슷하지만 구현 방식을 이렇게도 할 수 있구나.. 싶은 문제였당 🤗 흑흑 나도 코드를 깔끔하게 쓰고 싶당..
