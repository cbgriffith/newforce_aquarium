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
        length: "1-6 inches",
        food: "Vegetation",
        location: "Ohio River"
    },
    {
        name: "Bart",
        species: "Large Mouth Bass",
        length: "15.7 inches",
        food: "fish, crayfish, and frogs",
        location: "Kanawha River"
    },
    {   name: "Burt",
        species: "Brook Trout",
        length:"10.4 inches",
        food:"worms, insects, fish",
        location:"New River" 
    },
    {   name: "Beavis",
        species: "Walleye",
        length:"22.3 inches",
        food:"yellow perch, minnows",
        location:"Mississippi River"
    },
    {   name: "Butthead",
        species: "Red-bellied Piranha",
        length:"12 inches",
        food:"flesh",
        location:"Amazon River"
    }
]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}