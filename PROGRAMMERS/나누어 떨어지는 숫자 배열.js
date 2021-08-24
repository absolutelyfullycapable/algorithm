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
