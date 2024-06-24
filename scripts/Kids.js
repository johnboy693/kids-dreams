import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" 
                data-type="child" 
                data-wish="${child.wish}"
                data-name="${child.name}"
                >${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener (
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        if (whatWasClickedOn.dataset.type === "child")
            window.alert(`${whatWasClickedOn.dataset.name}'s wish is ${whatWasClickedOn.dataset.wish}`)
        
    }

)

