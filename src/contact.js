export function loadContact(){
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contact-page")
    
    const mainTitle = document.createElement("div")
    mainTitle.classList.add("main-title")
    mainTitle.textContent = "Find the Tavern"

    const contactSection = document.createElement("div")
    contactSection.classList.add("contactSection")
    contactSection.innerHTML = `
    <p>Phone Number: +1 (555) 123-4567</p>
    <p>Email Address: reservations@odinrestaurant.com</p>
    <p>Physical Address: 777 Asgard Boulevard, Midgard District, NY 10001</p>
    `

    contactContainer.appendChild(mainTitle)
    contactContainer.appendChild(contactSection)

    return contactContainer;
}