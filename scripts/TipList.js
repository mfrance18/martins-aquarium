import { getTips } from "./TipData.js";
import { Tips } from "./Tip.js";

export const TipsList = () => {
    const tipElement = document.querySelector(".tips")
    const allTips = getTips()

    let tipHTMLRepresentation = ""

    for (const data of allTips) {
        tipHTMLRepresentation += Tips(data)
    }

        tipElement.innerHTML += tipHTMLRepresentation
}

