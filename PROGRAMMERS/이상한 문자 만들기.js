/*
 *
 * 문제 설명
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 *
 * 제한 사항
 * 1. 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
 * 2. 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
 *
 */

// 내 풀이
function solution(s) {
  let letters = s.split(" ");
  let result = "";

  for (let i = 0; i < letters.length; i++) {
    letters[i].split("").map((val, idx) => {
      if (!(idx % 2)) {
        result += val.toUpperCase();
      } else {
        result += val.toLowerCase();
      }
      /*
       * 위 if문은 이렇게 바꿀 수도 있을 듯
       * ⬇️
       * result += idx % 2 ? val.toLowerCase() : val.toUpperCase();
       */
    });

    if (i === letters.length -1) return result;

    result += " ";
  }

  return result;
}

// 인상 깊은 다른 풀이 1
// 내 풀이와 비슷한(?) 같은(?) 방법이지만 코드 길이가 훨씬 ~~~ 짧고 간결하다 .. 삼항 연산자 .. 왜 생각 못 했지 ㄱ- ㅜ
function toWeirdCase(s) {
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ');
}

// 인상 깊은 다른 풀이 2
// 정규 표현식 정말 대단하구나. . . 😭
function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a) { return a[0].toUpperCase() + a[1].toLowerCase(); });
  // `\w`: word 를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미함
  // 붙어 있는 두 개의 단어 중 첫 번째 단어는 대문자, 두 번째 단어는 소문자로 변경하는 풀이
}
