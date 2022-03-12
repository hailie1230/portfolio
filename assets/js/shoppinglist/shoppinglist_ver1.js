'use strict';

//list 업데이트 
const inputV1 = document.querySelector('.list_item_add_v1');
const addBtnV1 = document.querySelector('.item_add_btn_v1');
const itemsV1 = document.querySelector('.list_item_box_v1');
const formV1 = document.querySelector('.new_form_v1')

//form 태그 안에 input에서 enter를 하거나, 버튼을 클릭했을때 -> submit작동
//submit 작동하면 페이지를 리로드함
formV1.addEventListener('submit',(event)=>{
  event.preventDefault(); //자동적인 행동 삭제
  onAddV1();
})

function onAddV1() {
  const text = inputV1.value;
  if(text === ''){
    input.focus();
    return;
  }

  const itemV1 = createItem(text);
  itemsV1.appendChild(itemV1);
  inputV1.value = '';

}
let id = 0;
function createItem(text){
  const itemRowV1 = document.createElement('div');
  itemRowV1.setAttribute('class', 'item_row_v1');
  itemRowV1.setAttribute('data-id', id);
  itemRowV1.innerHTML = `
  <span class="item_name_v1">${text}</span>
  <button class="item_delete_v1">
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

  return itemRowV1;

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


itemsV1.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if(id){
    // console.log('dd')
    const toBeDelete = document.querySelector(`.item_row_v1[data-id="${id}"]`);
    toBeDelete.remove();
  }
  
})


