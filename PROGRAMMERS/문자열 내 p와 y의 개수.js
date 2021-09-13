/*
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 * 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 */

// 내 풀이
function solution(s) {
  const lowerCaseList = s.toLowerCase().split("");

  let answer = true;
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < lowerCaseList.length; i++) {
    if (lowerCaseList[i] === "p") {
      pCount++;
    } else if (lowerCaseList[i] === "y") {
      yCount++;
    }
  }

  if (pCount === yCount || (!pCount && !yCount)) {
    return answer;
  } else {
    return answer = false;
  }
}

// 인상 깊은 다른 풀이 1
// 이런 생각 어떻게 하지???? 진심 천재 같다.. 😱
function numPY(s){
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
