const catOne = "sandwiches";
const catTwo = "drinks";
let menu = [];

const MenuItem = function(category,name,price) {
     this.category = category;
     this.name = name;
     this.price = price;
}

let BLT = new MenuItem(catOne, "BLT", "3");
let Milk = new MenuItem(catTwo, "Milk", "1");

menu.push(BLT,Milk);


function menuTab() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("tab-content-wrapper","flex-col");
    const title = document.createElement("h1");
    title.textContent = "Menu";
   

    const sandwichMenu = document.createElement("div");
    sandwichMenu.classList.add("menu-card");
    const sandwichMenuTitle = document.createElement("h2");
    sandwichMenuTitle.textContent = "Sandwiches";
    sandwichMenu.appendChild(sandwichMenuTitle);


    const drinksMenu = document.createElement("div");
    drinksMenu.classList.add("menu-card");
    const drinksMenuTitle = document.createElement("h2");
    drinksMenuTitle.textContent = "Drinks";
    drinksMenu.appendChild(drinksMenuTitle);


    menu.forEach(obj => {
        const menuRow = document.createElement("div");
        menuRow.classList.add("menu-row");
        
        const itemName = document.createElement("div");
        itemName.classList.add("items");
        itemName.textContent = obj.name;

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("items");
        itemPrice.textContent = `$ ${obj.price}`;

        menuRow.append(itemName,itemPrice);

        if (obj.category == catOne) {
            sandwichMenu.appendChild(menuRow)
        } else drinksMenu.appendChild(menuRow);


    })



    wrapper.append(title, sandwichMenu, drinksMenu);
    return wrapper;
}


export default menuTab;