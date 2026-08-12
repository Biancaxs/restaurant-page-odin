export function loadHome(){
    const homeContainer = document.createElement("div")
    homeContainer.classList.add("home-page")
    
    const mainTitle = document.createElement("div")
    mainTitle.classList.add("main-title")
    mainTitle.textContent = "Restaurant Odin"

    const restaurantImage = document.createElement("img")
    restaurantImage.classList.add("restaurant-img")
    restaurantImage.src = "https://images.pexels.com/photos/9271560/pexels-photo-9271560.jpeg"

    const tagline = document.createElement("div")
    tagline.classList.add("tagline")
    tagline.textContent = "Where ancient Nordic flavors meet modern culinary craft. Every dish is prepared with premium ingredients, passion, and a touch of magic since 2024."

    const hoursSection = document.createElement("div")
    hoursSection.classList.add("hours-section")
    hoursSection.innerHTML = `
    <h2>Our Hours</h2>
    <div class="hours-info">
        <p>‣ Monday - Thursday: 5pm - 11pm</p>
        <p>‣ Friday - Saturday: 5pm - 1am</p>
        <p>‣ Sunday: Closed</p>
    </div>

    `


    homeContainer.appendChild(mainTitle)
    homeContainer.appendChild(restaurantImage)
    homeContainer.appendChild(tagline)
    homeContainer.appendChild(hoursSection)

    return homeContainer;
}