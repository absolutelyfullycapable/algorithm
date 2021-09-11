// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 내 풀이
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let divisorsCount = checkDivisors(i);

    if (!(divisorsCount % 2)) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  function checkDivisors(num) {
    let divisors = 0;

    for (let n = 1; n <= num; n++) {
      if (!(num % n)) {
        divisors++;
      }
    }

    return divisors;
  }

  return answer;
}

// 인상 깊은 다른 풀이
function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // 제곱근이 정수라면 약수의 개수는 홀수.. 어떻게 이런 생각을.. 😱
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}

// 인상 깊은 다른 풀이 2
// 내 풀이 방식과 같은데 solution 함수 안에 다른 함수를 만들지 않고 문제를 푸는 방법도 있구나.. 해서 기록!
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        // if (!(i % j)) <- 이렇게 수정해도 될 듯!!
        count++;
      }
    }

    if (count % 2) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}
