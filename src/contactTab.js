function contactTab () {
    //Add tab title
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("tab-title");
    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Menu";
    contactTitle.appendChild(titleH1);

    return contactTitle;

}

export default contactTab;