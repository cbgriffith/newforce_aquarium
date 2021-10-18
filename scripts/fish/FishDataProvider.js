/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "George",
        species: "Goldfish",
        length: 6,
        food: "Vegetation",
        location: "Ohio River",
        image: './images/goldfish.jpg'
    },
    {
        name: "Bart",
        species: "Large Mouth Bass",
        length: 15.7,
        food: "fish, crayfish, and frogs",
        location: "Kanawha River",
        image: './images/largemouthbass.jpg'
    },
    {   name: "Burt",
        species: "Brook Trout",
        length: 10.4,
        food: "worms, insects, fish",
        location: "New River",
        image: './images/brooktrout.jpg'
    },
    {   name: "Beavis",
        species: "Walleye",
        length: 20,
        food: "yellow perch, minnows",
        location: "Mississippi River",
        image: './images/walleye.jpg'
    },
    {   name: "Butthead",
        species: "Red-bellied Piranha",
        length: 12,
        food:"flesh",
        location:"Amazon River",
        image: './images/redbelliedpiranha.jpg'
    }
]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if(fish.length % 3 === 0){
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0){
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}