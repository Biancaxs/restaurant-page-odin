export function loadMenu(){
    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-page")
    
    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "Pizza"

    const description = document.createElement("div")
    description.classList.add("description")
    description.textContent = "recipe description"

    menuContainer.appendChild(title)
    menuContainer.appendChild(description)

    return menuContainer;
}