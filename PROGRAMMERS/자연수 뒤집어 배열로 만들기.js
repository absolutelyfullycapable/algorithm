// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 내 풀이
function solution(n) {
  const letters = String(n).split("");
  let answer = [];

  for (let i = 0; i < letters.length; i++) {
    answer.unshift(Number(letters[i]));
  }

  return answer;
}

// 인상 깊은 다른 풀이
function solution(n) {
  return n.toString().split("").reverse().map(o => o = parseInt(o));
}
