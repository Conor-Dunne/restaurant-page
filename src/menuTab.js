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