export function loadMenu(){
    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-page")
    
    const mainTitle = document.createElement("div")
    mainTitle.classList.add("main-title")
    mainTitle.textContent = "The Feast Menu"

    const menuImage = document.createElement("img")
    menuImage.classList.add("menu-img")
    menuImage.src = "https://images.pexels.com/photos/18252653/pexels-photo-18252653.jpeg"

    const itens = document.createElement("div")
    itens.classList.add("description")
    itens.innerHTML = `
    <div class="menu-section">
        <h2>Burger</h2>

        <div class="menu-items">
            <div class="item">
                <h4>The Valhalla Burger</h4>
                <p>180g artisanal beef blend, melted sharp cheddar, crispy smoked bacon, and our signature house sauce on a toasted brioche bun.</p>
                <p>$18.50</p>
            </div>

            <div class="item">
                <h4>The Thor BBQ Smash</h4>
                <p>Two smashed beef patties, double American cheese, crispy onion rings, and a smoky hickory BBQ sauce.</p>
                <p>$16.00</p>
            </div>

            <div class="item">
                <h4>The Loki Veggie</h4>
                <p>A house-made spiced chickpea and quinoa patty, fresh avocado, pickled red onions, and zesty vegan garlic aioli.</p>
                <p>$15.50</p>
            </div>
        </div>
    </div>


    <div class="menu-section">
        <h2>Pizza</h2>

        <div class="menu-items">
            <div class="item">
                <h4>Bifröst Flatbread</h4>
                <p>House-made tomato sauce, fresh mozzarella, premium spicy pepperoni, and fresh basil leaves drizzled with hot honey.</p>
                <p>$21.00</p>
            </div>

            <div class="item">
                <h4>Asgardian Garden</h4>
                <p>Creamy white sauce base, goat cheese, roasted garlic, caramelized onions, wild mushrooms, and fresh arugula.</p>
                <p>$22.50</p>
            </div>

            <div class="item">
                <h4>Ragnarok Spicy Chicken</h4>
                <p>Shredded buffalo chicken, mozzarella, blue cheese crumbles, and a drizzle of fiery hot sauce.</p>
                <p>$23.00</p>
            </div>
        </div>
    </div>

    <div class="menu-section">
        <h2>Drink</h2>

        <div class="menu-items">
            <div class="item">
                <h4>Traditional Honey Mead</h4>
                <p>An ancient fermented beverage crafted from wild honey and pure water, served ice-cold in a traditional horn mug.</p>
                <p>$8.00</p>
            </div>

            <div class="item">
                <h4>Valkyrie Elixir</h4>
                <p>A refreshing gin cocktail infused with elderflower liqueur, fresh lime juice, cucumber slices, and a splash of tonic.</p>
                <p>$11.00</p>
            </div>
        </div>
    </div>

    `

    menuContainer.appendChild(mainTitle)
    menuContainer.appendChild(menuImage)
    menuContainer.appendChild(itens)

    return menuContainer;
}