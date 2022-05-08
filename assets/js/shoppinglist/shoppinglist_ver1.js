'use strict';

//list 업데이트 
const input = document.querySelector('.list_item_add');
const addBtn = document.querySelector('.item_add_btn');
const items = document.querySelector('.list_item_box');
const form = document.querySelector('.new_form')

//form 태그 안에 input에서 enter를 하거나, 버튼을 클릭했을때 -> submit작동
//submit 작동하면 페이지를 리로드함
form.addEventListener('submit',(event)=>{
  event.preventDefault(); // 브라우저의 자동적인 행동 삭제
  onAdd();
})

function onAdd() {
  const text = input.value;
  if(text === ''){
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  input.value = '';

}
let id = 0;
function createItem(text){
  const itemRow = document.createElement('div');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
  <input type="checkbox" class="check_box">
  <span class="item_name">${text}</span>
  <button class="item_delete">
    <i class="far fa-trash-alt" data-id = ${id}></i>
  </button>
  `
  
  // const checkBox = document.createElement('input');
  // checkBox.type = 'checkbox';
  // checkBox.setAttribute('class', 'checkbox');
  
  // const name = document.createElement('span');
  // name.setAttribute('class', 'list_name');
  // name.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class', 'item_delete');
  // deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  // deleteBtn.addEventListener('click', () => {
  //   items.removeChild(itemRow);
  // });

  // itemRow.appendChild(checkBox);
  // itemRow.appendChild(name);
  // itemRow.appendChild(deleteBtn);

  return itemRow;

}

// input.addEventListener('keydown', (event) => {
//    //한글 해결
//   if(event.isComposing){
//     return;
//   }
//   if(event.key === 'Enter'){
//     onAdd();
    
//   }
// })

// input.addEventListener('keyup', (event) => {
//   if(event.key === 'Enter'){
//     onAdd();
    
//   }
// })
// addBtn.addEventListener('click', () => {
//   onAdd();
// })


items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if(id){
    // console.log('dd')
    const toBeDelete = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDelete.remove();
  }
  
})


