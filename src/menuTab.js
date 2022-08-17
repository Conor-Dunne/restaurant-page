//menu items obj constructor
const SandwichItem = (name, price) => {
    const category = "Sandwiches";
    const Name = name;
    const Price = price;


    return {category, getName, getPrice};
}

const PizzaItem = (name, price) => {
    const category = "Pizzas";
    const Name = name;
    const Price = price;

    return {category, getName, getPrice};
}

const DrinkItem = (name, price) => {
    const category = "Drinks";
    const Name = name;
    const Price = price;

    return {category, getName, getPrice};

}

const BLT = SandwichItem("BLT", "2.50");
const cheeseSand = SandwichItem("Cheese sandwich", "2");

console.log(BLT);




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

    wrapper.appendChild(menuTitle);

    return wrapper;

}

export default menuTab;