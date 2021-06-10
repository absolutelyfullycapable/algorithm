// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
function solution(arr) {
    var answer = 0,
        sum = 0;
    for (var i of arr) {
        sum += i;
    }
    answer = sum / arr.length;
    return answer;
}