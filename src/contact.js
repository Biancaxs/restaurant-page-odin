export function loadContact(){
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contact-page")
    
    const mainTitle = document.createElement("div")
    mainTitle.classList.add("main-title")
    mainTitle.textContent = "Find the Tavern"

    const contactImage = document.createElement("img")
    contactImage.classList.add("contact-img")
    contactImage.src = "https://images.pexels.com/photos/36238556/pexels-photo-36238556.jpeg"

    const contactSection = document.createElement("div")
    contactSection.classList.add("contactSection")
    contactSection.innerHTML = `
    <div class="contact-info">
        <p class="info">Phone Number: +1 (555) 123-4567</p>
        <p class="info">Email Address: reservations@odinrestaurant.com</p>
        <p class="info">Physical Address: 777 Asgard Boulevard, Midgard District, NY 10001</p>
    </div>
    `

    contactContainer.appendChild(mainTitle)
    contactContainer.appendChild(contactImage)
    contactContainer.appendChild(contactSection)

    return contactContainer;
}