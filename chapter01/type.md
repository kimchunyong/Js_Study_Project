# 타입

'타입'이란 자바스크립트 엔진, 개발자 모두에게 어떤 값을 다른 값과 분별할 수 있는,고유한 내부특성의 집합이다.
예를들어, 기계(엔진)와 사람(개발자)가 42(숫자)란 값을 "42"(문자열)란 값과 다르게 취급한다면 두 값은 타입이 서로 다르다.

## 내장 타입

- null
- undefined
- boolean
- number
- string
- object
- symbol(Es6 부터 추가)

object 를 제외한 이들을 '원시타입(primitives)'이라 한다.

값 타입은 typeof 연산자로 알 수 있다. 그럼, typeof 반환 값은 항상 7 가지 내장 타입 중 하나일까?

```js
typeof undefined === "undefined"; //true
typeof true === "bollean"; //true
typeof 42 === "number"; //true
typeof "42" === "string"; //true
typeof { life: 42 } === "object"; //true

//ES6부터 추가!
typeof Symbol() === "symbol"; //true
```
