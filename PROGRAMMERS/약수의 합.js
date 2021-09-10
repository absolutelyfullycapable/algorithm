// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 내 풀이
// 양심 고백.. 약수 같은 거 반환하는 메소드 있나 검색했다가 이 문제에 풀이에 대한 힌트 봐 버림.. 😑 쩝.. ㅠ
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      answer += i;
    }
  }

  return answer;
}
