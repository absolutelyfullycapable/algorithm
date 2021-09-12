// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 내 풀이
function solution(s) {
  var answer;

  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) {
        return answer = false;
      }
    }

    return answer = true;
  }

  return answer = false;
}

// 인상 깊은 다른 풀이
// 이 문제는 개편되어서 개편 이전 해답들이 이제는 통과 안 되는 경우가 많은 듯.. 그래서 나랑 같은 방식의 풀이지만 훨씬 깔끔한 코드 기록~~!!
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for(var i = 0; i < s.length; i++) {
      if(isNaN(Number(s[i]))) return false;
  }

  return true;
}

