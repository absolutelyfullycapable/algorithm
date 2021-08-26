// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다. 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 내 풀이
function solutuion(phone_number) {
  for (let i = 0; i < phone_number - 4; i++) {
    phone_number = phone_number.replace(phone_number[i], "*");
  }

  return phone_number;
}

// 인상 깊은 다른 풀이 1 (정규식..!! .. 😱)
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 인상 깊은 다른 풀이 2 (repeat 메소드)
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}
