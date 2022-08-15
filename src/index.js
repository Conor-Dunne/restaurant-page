import "./styles.css";
import pageLoad from "./page-load";
import homeTab from "./homeTab";
import menuTab from "./menuTab";
import contactTab from "./contactTab";


pageLoad(homeTab());

const tabContent = document.querySelector(".content");

function removeTabContent () {
    const contentWrapper = document.querySelector(".tab-content-wrapper");
    contentWrapper.remove();
}




const navBar = document.querySelector("nav");

navBar.addEventListener("click", changeTab);



function changeTab(el) {
    if (el.target.textContent == "Home") {
        removeTabContent();
        tabContent.appendChild(homeTab())
    } else if (el.target.textContent == "Menu") {
        removeTabContent();
        tabContent.appendChild(menuTab())
    }   else if (el.target.textContent == "Contact") {
        removeTabContent();
        tabContent.appendChild(contactTab());
    } else return;
}