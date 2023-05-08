const menuButton = document.querySelector("#menu-button")
const nav = document.querySelector("aside")

menuButton.addEventListener("click", (e) => {
   nav.classList.toggle("open")

   if (nav.classList.contains("open")) {
      menuButton.innerHTML = "&#x2715;"
   } else {
      menuButton.innerHTML = "☰"
   }
})


document.querySelectorAll("aside a").forEach(link => {
   link.addEventListener("click", () => {
      nav.classList.remove("open")
      if (nav.classList.contains("open")) {
         menuButton.innerHTML = "&#x2715;"
      } else {
         menuButton.innerHTML = "☰"
      }
   })
})

