import table from "./images/table.jpg";

export default function pageLoad(tab) {
    const createDiv = document.createElement("div");
   
    //Add background img to html
    const html = document.querySelector("html");
    html.style.backgroundImage = `url(${table})`;
    html.style.backgroundSize = "cover";

    //Add container div
    const container = document.querySelector(".container");

    //Add header and classlist
    const header = document.createElement("header");
    header.classList.add("header");
    container.appendChild(header);

    //Add nav menu to header  
    const nav = document.createElement("nav");
    const navMenu = document.createElement("ul");
    const navHome = document.createElement("li");
    navHome.textContent = "Home";
    const navFoodMenu = document.createElement("li");
    navFoodMenu.textContent = "Menu";
    const navContact = document.createElement("li");
    navContact.textContent = "Contact";

    navMenu.append(navHome, navFoodMenu, navContact);
    nav.appendChild(navMenu);
    header.appendChild(nav);


    //Add main section div
    const main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);

    //Add content div 
    const content = document.createElement("div");
    content.classList.add("content");
    main.appendChild(content);

    content.appendChild(tab);

}

