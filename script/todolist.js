//1. 변수 선언

const btn = document.getElementById('submit_btn'); //1. 글 입력 + 

//2. 출력변수 
const addValue = document.getElementById('addValue');


//3. 삭제버튼 변수 
const del_btn = document.getElementById('delete_btn');

//4. 글목록 변수 
let result = document.querySelector('ul');



//2. 버튼 이벤트와 함수 작성
btn.addEventListener('click', (e) => {
  addTo();
});

//내용 추가를 위한 함수 
function addTo() {
  // alert('버튼 입력을 누르셨습니다.');
  if (addValue.value == false) {//값이 없다면 
    alert('내용을 입력하세요.');
  } else {//값이 있다면 
    let list = document.createElement('li');
    list.className = 'todo_item';

    // ✅ 체크박스 생성
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo_check';

    // 텍스트 span
    let text = document.createElement('span');
    text.innerText = addValue.value;


    let del = document.createElement('button');
    del.className = 'del_btn';

    del.innerText = '삭제';

    // li에 요소 추가 (순서 중요)
    list.appendChild(checkbox);
    list.appendChild(text);
    list.appendChild(del);


    //ul 태그의 자식 요소로 태그를 추가한다. 
    result.appendChild(list); //ul태그 안에 li태그 넣어줌
    list.appendChild(del); //li태그에 자손으로 button추가 \



    //삭제 버튼 서식 추가 
    del.innerText = 'X'
    del.style.fontSize = "20px"
    del.style.border = "none";
    del.style.right = "27px";
    // del.style.marginTop = "10px";
    del.style.cursor = "pointer";
    del.style.position = "relative";

    addValue.value = ''; //입력값 초기화 
    addValue.focus(); //글입력창에 커서를 나오게 하여 사용자가 클릭하지 않고 바로 입력할 수 있도록 한다. (접근성)

    //사용자가 해당 글목록(li)을 클릭 시 '취소선'나오게 
    // ✅ 체크박스 클릭 시 취소선
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        text.style.textDecoration = 'line-through';
        text.style.color = 'gray';
      } else {
        text.style.textDecoration = 'none';
        text.style.color = '#333';
      }
    });

    // ⭐ (삭제)버튼을 클릭 시 해당 li태그만 삭제가 되어야 한다. 
    del.addEventListener('click', function (e) {
      //삭제버튼이 속한 상위 요소인 부모를 선택(li태그)
      let li_remove = e.target.parentElement;
      li_remove.remove(); //선택한 요소의 부모요소 삭제하기 
    });
  }
}

//내용 삭제를 위한 함수(모두) 
del_btn.addEventListener('click', (e) => {
  clearAll();
});

//추가된 글 목록을 한꺼번에 삭제하기 
function clearAll() {
  // alert('삭제 버튼을 누르셨습니다.');
  if (confirm('버튼을 클릭 시 글 내용이 모두 삭제됩니다. 실행하시겠습니까?') === true) {
    if (result.innerText == '') {
      alert('삭제할 내용이 없습니다.');
    } else {
      result.innerText = '';
    }

  } else { //확인, 취소 메뉴에서 취소 버튼 클릭한 경우 
    return false; //더 이상 작업하지 않고 끝냄

  }
}
