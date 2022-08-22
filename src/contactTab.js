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

    //add contact info card
    const contactInfo = document.createElement("div");
    // contactInfo.classList.add("menu-card");
    const contactTxt = document.createElement("p");
    contactTxt.textContent = "Ph: 080-555-555";
    const emailTxt = document.createElement("p");
    emailTxt.textContent = "Email: bob@juicygoose.jp";
    contactInfo.append(contactTxt,emailTxt );


    wrapper.append(contactTitle, contactInfo);

    return wrapper;

}

export default contactTab;