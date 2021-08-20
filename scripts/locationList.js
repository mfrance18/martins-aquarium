import { getLocation } from "./LocationData.js";
import { Location } from "./location.js";
export const LocationList = () => {

    // Get a reference to the `<section class="fishList">` element
    const locationElement = document.querySelector(".location")
    const allLocations = getLocation()
  
    let locationHTMLRepresentation = ""
    
    for (const info of allLocations) {
        locationHTMLRepresentation += Location(info)
    }
    // Add to the existing HTML in the content element
    locationElement.innerHTML += locationHTMLRepresentation
}