# Mini JavaScript Project by Using Vanilla JS, Weather API

(Updated Version)

# What I learned...

1. form submit
   <br/>
   form 태그 안에 input 태그를 넣은 상황에서 html 실행시 엔터를 누를때마다 자동으로 form을 submit 해주는 특성이 있음. 이때마다 홈페이지는 전체적으로 새로고침 되어버리는 현상이 발생.
2. 기본 동작 실행 제어
   <br/>
   // event.preventDefault(); 이용하면 새로고침과 같은 기본 동작들을 실행하지 못하게 막아줄 수 있음.
3. input 입력 데이터 저장
   <br/>
   localStorage를 통해 input에 입력한 데이터를 브라우저에 저장할 수 있음.
4. clock
   <br/>
   setInterval과 Date Object를 이용한 시계 기능 구현. 이 과정에서 시간 표시 형식을 통일하기 위해서 padStart 사용.
5. html 요소 생성 및 추가
   <br/>
   document.createElement를 이용하여 html 요소를 생성하고 이것을 document.body.appendChild로 body 맨 뒤에 추가할 수 있다. 만약 요소를 body 맨 앞에 추가하고 싶으면 document.body.prependChild를 이용하면 된다.
6. Array 변환, forEach 메소드 적용
   <br/>
   JSON.stringify를 통해 string으로 만들 수 있고 이를 통해 localStorage에 데이터를 저장할 수 있다. localStorage에 저장된 string을 JSON.parse를 이용하여 Array로 변환해서 forEach 메소드를 사용하면 각각의 배열 요소들을 화면에 나타낼 수 있다.
7. id 생성
   <br/>
   Date.now()를 이용하여 newTodoObj에 id를 랜덤으로 할당. 이를 통해서 각각의 li들을 서로 구별할 수 있음.
8. filter를 이용한 toDo 데이터 삭제
   <br/>
   filter 메소드를 적용하면 예전 array에는 작업하지 않고 결과물로 새로운 array를 생성한다. 즉, filter를 적용해도 예전 array는 변경되지 않는다는 것이다. filter메소드를 사용하여 원하지 않는 데이터를 삭제한 배열을 새로 얻을 수 있다.
9. Weather API 사용
   <br/>
   user의 위도, 경도 정보를 통해 유저의 지역 및 날씨 정보를 화면에 표시할 수 있게 도와준다.

# New Update

1. 유저가 더욱 편리하게 웹페이지를 이용할 수 있도록 가독성에 초점을 맞춰서 기본 CSS style 개선.
2. 코드 가독성 개선.
