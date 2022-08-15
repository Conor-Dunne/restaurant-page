import "./styles.css";
import pageLoad from "./page-load";
import homeTab from "./homeTab";
import menuTab from "./menuTab";
import contactTab from "./contactTab";


pageLoad(homeTab());


const navBar = document.querySelector("nav");
console.log(navBar);

navBar.addEventListener("click", changeTab);

function test(e) {
    console.log(e.target.textContent);
}


function changeTab(el) {
    if (el.target.textContent == "Home") {
        pageLoad(homeTab())
    } else if (el.target.textContent == "Menu") {
        pageLoad(menuTab());
    }   else if (el.target.textContent == "Contact") {
        pageLoad(contactTab());
    } else return;
}