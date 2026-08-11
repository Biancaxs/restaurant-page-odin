import "./style.css"
import { loadHome } from "./home.js"
import { loadMenu } from "./menu.js"
import { loadContact } from "./contact.js"

const content = document.querySelector("#content")

const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const contactBtn = document.querySelector("#contact-btn")

function switchTab(loadTabFunction) {
    content.innerHTML = ""
    const newContent = loadTabFunction()
    content.appendChild(newContent)
}

homeBtn.addEventListener("click", () => switchTab(loadHome))
menuBtn.addEventListener("click", () => switchTab(loadMenu))
contactBtn.addEventListener("click", () => switchTab(loadContact))

switchTab(loadHome)