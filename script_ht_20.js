// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

const testLink = "cdn.britannica.com/04/225204-138-2A9AEAF2/did-you-know-zodiac-Leo.jpg?w=800&h=450&c=crop"

let enteredLink = prompt("Enter a link", "")
const body = document.querySelector("body")

const goButton = document.createElement("button")
goButton.innerText = "Go to the link"

const anotherButton = document.createElement("button")
anotherButton.innerText = "No clue what does the button should do"

const linkValidation = function (link) {
        return link.startsWith("https://") || link.startsWith("http://") ? link : "https://" + link
}

// putting elements in paragraphs
elements = [goButton, anotherButton]
elements.forEach(function (element) {
        const p = document.createElement("p");
        p.appendChild(element);
        document.body.appendChild(p);
});

const buttons = document.querySelectorAll("button")
buttons.forEach(function (element) {
        element.addEventListener("click", () => {
        switch (element.innerText) {
                case "Go to the link":
                        window.location.href = linkValidation(enteredLink)
                        break
                default:
                        alert("Thanks for clicking me")
                        break
        }})
})