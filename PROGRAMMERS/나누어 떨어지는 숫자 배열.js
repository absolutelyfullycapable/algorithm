// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요. divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 내 풀이
function solution(arr, divisor) {
  let answer = [];
  
  for (let num of arr) {
    if (!(num % divisor)) {
      answer.push(num);
    }
  }
    
  if (!answer.length) {
    answer = [-1];
  }
    
  function sortFunc (a, b) {
    return a - b;
  }
    
  return answer.sort(sortFunc);
}

// 인상 깊은 다른 사람의 풀이 1
function solution(arr, divisor) {
  var answer = arr.filter(v => v % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
// `filter()` 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환함

// 인상 깊은 다른 사람의 풀이 2
function solution(arr, divisor) {
  var answer = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }

  /*
  26-28 번째 줄은 이렇게 바꿔도.. 될 듯??
  for (let i of arr) {
    if (!(i % divisor)) answer.push(i);
  }
  */

  return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}
