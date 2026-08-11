export function loadContact(){
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contact-page")
    
    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "Contact"

    const paragraph = document.createElement("div")
    paragraph.classList.add("paragraph")
    paragraph.textContent = "email@email.com"

    contactContainer.appendChild(title)
    contactContainer.appendChild(paragraph)

    return contactContainer;
}