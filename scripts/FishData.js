//exporting function for importing to another js file
export const getFish = () => {
    return fishCollection
}

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFishArray.push(fish)
        }
    }

    return holyFishArray
}

export const getSoldierFish = () => {
    const soldiersArray = []

    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 === 0) {
            soldiersArray.push(fishObj)
        }
    }
    return soldiersArray
}

export const getUnworthy = () => {

    const unworthyArray = []

    for (const fishLength of fishCollection) {
        if (!(fishLength.length % 3 === 0 || fishLength.length % 5 === 0)) {
            unworthyArray.push(fishLength)
        }

    }
    return unworthyArray
}


const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        image: "dopeyfish.jpg",
        species: "Trigger",
        length: 7,
        waterType: "Salt",
        harvestLocation: "Costa Rica"
    },
    {
        name: "Mr Freeze",
        food: "Meal Worms",
        image: "crazy-fish.jpeg",
        species: "Tang",
        length: 20,
        waterType: "Salt",
        harvestLocation: "Florida"
    },
    {
        name: "Jeff",
        food: "Forage Fish",
        image: "bluefish.jpg",
        species: "Bluefish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Australia"
    },
    {
        name: "Nemo",
        food: "Goldfish",
        image: "Gold.jpg",
        species: "Clown",
        length: 3,
        waterType: "Salt-water",
        harvestLocation: "Florida"
    },
    {
        name: "Don Julio",
        food: "snails",
        image: "pinkfish.jpeg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"
    },
    {
        name: "Karen",
        food: "Algae",
        image: "yellowbluefish.jpeg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt",
        harvestLocation: "Puerto Rico"
    },
    {
        name: "Eleanor",
        food: "everything",
        image: "purplefish.jpeg",
        species: "Angler",
        length: 5,
        waterType: "Fresh",
        harvestLocation: "North Carolina",
    },
    {
        name: "Robin Gilliams",
        food: "Bee Moths",
        image: "Gold.jpg",
        species: "Clownfish",
        length: 2,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Three-Eyed Fish",
        food: "worms",
        image: "dopeyfish.jpg",
        species: "Fictional",
        length: 5,
        waterType: "Salt-water",
        harvestLocation: "Ohio"
    },
    {
        name: "Doctor Fish",
        food: "biofilm ",
        image: "bluefish.jpg",
        species: "Tinca tinca",
        length: 3.9,
        waterType: "Fresh Water",
        harvestLocation: "Massachusetts"
    },
    {
        name: "Beast",
        food: "Shrimp",
        image: "blobfish-2.jpg",
        species: "Blobfish",
        length: 10,
        waterType: "salt",
        harvestLocation: "Florida",
    },
    {
        name: "Bruce",
        food: "not fish",
        image: "Bruce.jpg",
        species: "Great White",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
    {
        name: "Gordon",
        food: "Krill",
        image: "pinkfish.jpeg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    },
    {
        name: "Bloat",
        food: "shrimp",
        image: "yellowbluefish.jpeg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Marlin",
        food: "Mealworms",
        image: "orangefish.jpeg",
        species: "clownfish",
        length: 4,
        waterType: "Saltwater",
        harvestLocation: "Bahamas"
    },
    {
        name: "Blob Marley",
        food: "mollusks",
        image: "blobfish-2.jpg",
        species: "Blobfish",
        length: 8,
        waterType: "Salt",
        harvestLocation: "Australia"
    },
    {
        name: "Nile Tilapia",
        food: "krill",
        image: "crazy-fish.jpeg",
        species: "tilapia",
        length: 8,
        waterType: "Fresh",
        harvestLocation: "North Africa"
    },
    {
        name: "Dale",
        food: "whales",
        image: "greatwhite.jpg",
        species: "Great White",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    }
]


