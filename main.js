

let shopList = ["Pane", "Latte", "Uova", "Farina", "Nutella", "Yougurt" ]
console.log (shopList)

let conut = 0;

while (count < shopList.length) {
    conut++;

    const list = document.getElementById ("lista-della-spese");
    let listElement = document.createElement("li");
    
    listElement.innerText = shopList[conut];
    console.log (listElement)
    
    list.append == listElement
    break;
}