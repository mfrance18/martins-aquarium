// import { getFish } from "./FishData.js";
import { Fish } from "./Fish.js";
import { getMostHolyFish } from "./FishData.js";
import { getSoldierFish } from "./FishData.js";
import { getUnworthy } from "./FishData.js";

export const FishList = () => {
    const holyFish = getMostHolyFish()
    addFishToDom(holyFish)
    const soldierFish = getSoldierFish()
    addFishToDom(soldierFish)
     const unWorthy = getUnworthy()
     addFishToDom(unWorthy)
}

const addFishToDom = (arrayOfFish) => {

    const contentElement = document.querySelector(".fishList")

    let fishHTMLRepresentation = ""

    for (const oneFishObject of arrayOfFish) {
        fishHTMLRepresentation += Fish(oneFishObject)
    }
    contentElement.innerHTML += fishHTMLRepresentation
}