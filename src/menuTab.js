let sandwiches = [];
let pizzas = [];
let drinks = [];


//menu items obj constructor
const SandwichItem = (name, price) => {
    const category = "Sandwiches";
    const getName = name;
    const getPrice = price;


    return {category, getName, getPrice};
}

const PizzaItem = (name, price) => {
    const category = "Pizzas";
    const getName = name;
    const getPrice = price;

    return {category, getName, getPrice};
}

const DrinkItem = (name, price) => {
    const category = "Drinks";
    const getName = name;
    const getPrice = price;

    return {category, getName, getPrice};

}

const BLT = SandwichItem("BLT", "2.50");
const cheeseSand = SandwichItem("Cheese sandwich", "2");

sandwiches.push(BLT, cheeseSand);

console.log(sandwiches);

const addMenuItems = function (obj) {

    const nameColumn = document.createElement("div");
    nameColumn.classList.add("menu-item-name-col");
    const nameh3 = document.createElement("h3");
    nameh3.textContent = obj.getName;
    nameColumn.appendChild(nameh3);

    const priceColumn = document.createElement("div");
    priceColumn.classList.add("menu-item-price-col");
    const priceh3 = document.createElement("h3");
    priceh3.textContent = `$ ${obj.getPrice}`;
    priceColumn.appendChild(priceh3);

    console.log(nameColumn);

}


function menuTab () {

    //create wrapper
    const wrapper = document.createElement("div");
    wrapper.classList.add("tab-content-wrapper","flex-col");

    //Add tab title
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("tab-title");
    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Menu";
    menuTitle.appendChild(titleH1);

    //Add menu section cards
    const sandwichSection = document.createElement("div");
    sandwichSection.classList.add("menu-sections");
    const sandwichTitle = document.createElement("h2");
    sandwichTitle.textContent = "Sandwiches:"
    sandwichSection.appendChild(sandwichTitle);


    wrapper.append(menuTitle, sandwichSection);

    return wrapper;

}

addMenuItems();
export default menuTab;