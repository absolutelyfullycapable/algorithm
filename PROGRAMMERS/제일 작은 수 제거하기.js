// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 내 풀이
function solution(arr) {
  let answer;
  let min = arr[0];

  if (arr.length === 1) {
    return answer = [-1];
  }

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return answer = arr.filter((value) => value !== min);
}

// 인상 깊은 다른 풀이
// Math.min()을 이렇게도 쓸 수 있구나.. !! 😲
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  if (arr.length < 1) {
    return [-1];
  }

  return arr;
}
