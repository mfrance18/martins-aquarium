import { getFish } from "./FishData.js";
import { Fish } from "./Fish.js";
export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    const allFishes = getFish()
  
    let fishHTMLRepresentation = ""
    
    for (const oneThingFromTheSea of allFishes) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `${fishHTMLRepresentation}`
}