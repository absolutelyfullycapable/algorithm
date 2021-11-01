/*
 * 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
 * 제한 사항: 3 ≤ n ≤ 1,000,000
 */

// 내 풀이
// 'answer <= 1000000' <- 이것도 그렇고 풀이가 전체적으로 진짜.. 바보 같다 하하 ~ ^ㅇ^ 웃음만 나오는군..
function solution(n) {
  for (let answer = 2; answer <= 1000000; answer++) {
    if (!((n - 1) % answer)) {
      return answer;
    }
  }
}

// 인상 깊은 다른 풀이 1
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

// 인상 깊은 다른 풀이 2
const solution = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
};
