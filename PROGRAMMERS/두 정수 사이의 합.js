/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
1. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
2. a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
3. a와 b의 대소관계는 정해져있지 않습니다.
*/

// 내 풀이.. 정말 부끄럽당.. 내 코드 눈 감아.. 😑
function solution(a, b) {
    var sum = 0;
    if (a < b) {
        for (var i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (var i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        sum = a;
    }
    return sum;
}

// 인상 깊었던 다른 풀이 1
function solution(a, b) {
    var sum = 0;
    return (a + b) * (Math.abs(b - a) + 1) / 2;
}

// 인상 깊었던 다른 풀이 2
function solution(a, b) {
    var sum = 0,
        min = Math.min(a, b),
        max = Math.max(a, b);

    for (var i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}