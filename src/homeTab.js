


function homeTab() {

    //create wrapper
    const wrapper = document.createElement("div");
    wrapper.classList.add("tab-content-wrapper","flex-col");

    //Add tab title
    const homeTitle = document.createElement("div");
    homeTitle.classList.add("tab-title");
    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Bob's Family Kitchen"
    homeTitle.appendChild(titleH1);

    //Add intro copy
    const introCard = document.createElement("article");
    const para = document.createElement("p");
    para.textContent = "Only the freshest ingredients make it to the kitchen here at Bob's Family Kitchen. Our local suppliers put just as much love into growing and harvesting our ingredients as we do into serving our customers a meal that they will savour. "
    introCard.appendChild(para);

    //Add open-times tab
    const hoursCard = document.createElement("article");
    const hoursList = document.createElement("ul");
    const monday = document.createElement("li");
    const tueToSun = document.createElement("li");
    monday.textContent = "Monday: Closed";
    tueToSun.textContent = "Tue to Sun: 10am - 9pm";
    hoursList.append(monday, tueToSun );
    hoursCard.appendChild(hoursList);

    
    wrapper.append(homeTitle, introCard,hoursCard);

    return wrapper;

}

export default homeTab


