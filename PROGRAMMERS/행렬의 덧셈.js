// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 내 풀이.. 그런데 테스트 케이스는 통과하면서 제출하니까 런타임 에러로 다 틀리길래 원인이 뭐지..? 싶어서 검색하다가.. answer[i] = []; <- 요거를 봐 버려서.. ㅜ 완벽하게 내가 풀었다고 할 수 없을 듯.. 부끄럽다 증말로.. 😣 조금만 더 생각해 보면 알 수 있었을 텐데.. 흑흑
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    
    for (let n = 0; n < arr1[i].length; n++) {
      answer[i][n] = arr1[i][n] + arr2[i][n];
    }
  }

  return answer;
}

// 인상 깊은 다른 풀이 1 (map 메소드를 활용하신 분이 많았다!! 이 메소드.. 더 공부해 봐야징)
function sumMatrix(A, B) {
  var answer;
  
  answer = A.map((a, i) => {
    return a.map((val, idx) => {
      val += B[i][idx];
      return val;
    });
  });
  
  return answer;
}

// 인상 깊은 다른 풀이 2 (1의 간단 버전 같당.. 이렇게 짧아질 수 있다니 !! 😭)
function sumMatrix(A, B){
  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
