# TypeScript 데이터 타입
TypeScript에서 변수의 데이터 타입 지정하기

변수이름 옆에 `:데이터타입`을 입력    

---
# Primitive Type
## 1. Boolean
```ts
let isDone:boolean = false;

isDone = true;

console.log (typeof isDone) //boolean
```
---
## 2. Number
js에서와 같이 TypeScript의 모든 숫자는 부동 소수점 값이다.

10진수, 16진수, 2진수, 8진수를 지원하며 NaN, _표기(ex/1_000)도 사용할 수 있다.

```ts
let decimal:number = 6; //10진수

let hex:number = 0xf00d; //16진수

let binary:number = 0b1010; //2진수

let octal:number = 0o744; //8진수

let notANumber:number = NaN; //숫자의 한 형태

let underscoreNum:number = 1_000_000; //100만, 쉽게 알아볼 수 있는 표기
```
---
## 3. String
텍스트(문자)데이터

"" 나 ''를 사용하여 문자열을 감싼다.

### -Template String
js에서 문자들과 js데이터를 더해서 사용하기 위해 +기호를 사용했던 것과 달리 ts에서는 백틱 기호(`)로 감싸는 것으로 문자와 데이터를 섞어 사용할 수 있다.
```ts
let snackName:string = 'cookie';
let price:number = 1200;

let sentence:string = `Today's menu is ${snackName}, price is ${price}`
```
---
## 4. Symbol
Symbol(대문자 주의) 함수로 사용

```ts
console.log(Symbol('hi'));
```
이것을 ts에서 입력해보면 오류가 나는데, 


tsconfig.json 파일로 가서
`"lib": ["ES2015", "DOM"],`로 설정
### -Symbol의 역할
프리미티브 타입 값을 고유하고 수정 불가한 값으로 만든다. (접근을 제어하는데 사용)
```ts
console.log(Symbol('hi')=== Symbol('hi')); //false
```
함수로 사용할땐 대문자, []로 사용할땐 소문자
```ts
const object = {
    [s]: "symbol"
};

object[s]
```

---
## 5. Null과 Undefined
null과 undefined는 다른 데이터 타입이 설정된 변수에도 할당 할 수 있으나, `"strict": true,` 설정이 그 기능을 막고있음.

이럴때 null과 undefined를 할당할 수 있게 하기 위해 union type을 사용한다.
```ts
let union:string | null = null;
```
---
# Primitive가 아닌 데이터 타입
## 1. Object
primitive type이 아님을 나타낼 때 사용한다.

### -리터럴 방식으로 object 생성하기
```ts
const cookie = {
    name: "cookie",
    price: "1200"
};
```

### -전역객체 Object.create를 사용하여 생성하기
```ts
const candy = Object.create({
    name: "candy",
    price: "500"
});
```
create 메소드는 union type `(o:object | null)` - primitive type이 아니면 object이고 primitive type이면 null -이다.

object에 primitive type 데이터를 넣으면 오류가 생김.

---
## 2. Array
하나의 같은 타입으로 묶여있는 데이터

### -array에서 데이터 타입 표기하는 방법
`:데이터타입[]` (많이 사용)
```ts
let list:string[] = ['a', 'b', 'c'];
```
`:Array<데이터타입>`
```ts
let list2:Array<number> = [1, 2, 3];
```

### -다른 데이터 타입을 섞고싶을때는 union type 사용

`:(데이터타입1 &verbar; 데이터타입2)`
```ts
let list:(string | number)[] = ['a', 'b', 'c', 3];
```
---
## 3. Tuple
두 타입을 입력하면 배열에서 순서가 어떻게 나오든 상관없는 array와 달리,
순서, 타입, 데이터 수가 일치해야한다.
```ts
let a: [string, number, number];

a = ['hi', 10, 12];
```
---
## 4. Any
어떤 타입이어도 되는 타입.

컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문에 필요하지 않은 경우에는 최대한 쓰지 않는 것이 좋다.

---
## 5. Unknown
모르는 타입의 변수를 작성할 때 이 변수가 무엇이든 될 수 있음을 알려주는 타입. 

타입 안정성이 낮아지는 any를 대체하고자 하는 타입이다

### -타입가드
```ts
declare const maybe:unknown;

if (maybe === true) {
    const b: boolean = maybe;

    const s: string = maybe; //오류
}
```
if문에서 unknown이었던 maybe가 true(boolean값)으로 지정됐기 때문에 boolean 데이터 설정은 되고 string 데이터 설정은 안된다.

unknown을 쓰기 위해선 어떤 타입이 될 것인지 설정을 하고 들어가야한다. 타입을 확장하지 않으면 사용할 수 없다.

---
## 6. Never
never은 모든 타입의 subtype이다. 

모든 타입에 할당 할 수 있지만, never에는 어떤 것도 할당 할 수 없다.

잘못된 타입을 넣는 실수를 막아줄 때 사용한다.
```ts
let a2:string = 'hi';

if (typeof a2 !== 'string') {
    a2;
}
```
a2의 타입을 string으로 지정, if문에서는 a2가 string이 아님 = 이 경우 a2는 never가 된다.

---
## 7. Void
어떤 타입도 가지지 않는 상태.

void에 할당할 수 있는 유일한 타입은 undefined이다.

아무것도 하지 않겠다는 것을 명시적으로 표현하고 행동을 막는 기능을 한다.