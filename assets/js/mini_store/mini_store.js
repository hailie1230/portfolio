//Fetch the items from the JSON file
function loadItems(){
  return fetch('data/data.json')
  .then(response => response.json())
  .then(json => json.items);
}

//Update the list with the given items
function dispalyItems(items){
  const container = document.querySelector('.store.items');
  container.innerHTML = items.map(item => createHTMLstring(item)).join('');
}

//Create Html list item from the given data item
function createHTMLstring(item){
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.name}" class="item__thumbnail">
    <span class="item__description">${item.quantity}ea, ${item.price}</span>
  </li>
  `;
}
function onButtonClick (event, items){
  // console.log(event.target.dataset.key)
  // console.log(event.target.dataset.value)

  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if(key == null || value == null){
    return;
  }
  
  const filtered = items.filter(item => item[key] === value);
  console.log(filtered);
  dispalyItems(filtered);
}
function setEventListener(items){
  const logo = document.querySelector('.store_logo');
  const buttons = document.querySelector('.store.buttons');
  logo.addEventListener('click', () => dispalyItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

//main
loadItems()
  .then(items => {
    // console.log(items);
    dispalyItems(items);
    setEventListener(items);
  })
  .catch(console.log);