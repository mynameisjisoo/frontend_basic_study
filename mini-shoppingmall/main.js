'use strict';
//Fetch the items from the JSON file
//loadItem() : fetch를 이용해서 data를 받아오고, 성공적으로 받아오면 json으로 변환하고, json안에있는 items를 리턴함
function loadItems() {
  return fetch('data/data.json') //fetch는 data를 성공적으로 받아오면 response라는 객체 전달해줌
    .then(response => response.json()) //response를 json()이라는 api를 이용해서 response body를 json의 object로 변환함
    .then(json => json.items); //json에 있는 items만 전달
}

//받아온 items를 html 요소로 만들어서 페이지에 표시되게
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item));
}

//loadItems : json 파일을 동적으로 읽어오는 함수인데 시간이 오래 걸리니까 promise를 리턴함
loadItems() //
  .then(items => {
    console.log(items);
    //성공적으로 되면 items받아옴
    displayItems(items); //displayItems: items를 html에 보여줌
    // setEventListener(items); //btn누르면 filtering
  })
  .catch(console.log); //실패할 경우 예외처리
