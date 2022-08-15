function contactTab () {

    //create wrapper
    const wrapper = document.createElement("div");
    wrapper.classList.add("tab-content-wrapper","flex-col");

    //Add tab title
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("tab-title");
    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Contact Us";
    contactTitle.appendChild(titleH1);

    wrapper.appendChild(contactTitle)

    return wrapper;

}

export default contactTab;