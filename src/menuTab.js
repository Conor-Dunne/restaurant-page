function menuTab () {
    //Add tab title
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("tab-title");
    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Menu";
    menuTitle.appendChild(titleH1);

    return menuTitle;

}

export default menuTab;