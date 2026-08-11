export function loadHome(){
    const homeContainer = document.createElement("div")
    homeContainer.classList.add("home-page")
    
    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "Restaurant Odin"

    const paragraph = document.createElement("div")
    paragraph.classList.add("paragraph")
    paragraph.textContent = "just a paragraph"

    homeContainer.appendChild(title)
    homeContainer.appendChild(paragraph)

    return homeContainer;
}