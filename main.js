

let shopList = ["Pane", "Latte", "Uova", "Farina", "Nutella", "Yougurt" ]
console.log (shopList)

let i = 0;

const list = document.getElementById ("lista-della-spese");

while ( i < shopList.length) {
   

    
    const listElement = document.createElement('li');
    listElement.classList.add ("list-group-item")
    
    listElement.innerText = shopList[i];
    console.log (listElement);
    
    list.append (listElement);
    i++;
}