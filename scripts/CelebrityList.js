import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"                   
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        
        if (clickTarget.dataset.type === "celebrity") {
            window.alert(`${clickTarget.dataset.name} is a ${clickTarget.dataset.sport} star.`)
        }
    }
)