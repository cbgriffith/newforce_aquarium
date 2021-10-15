import { Fish } from './fish/Fish.js'
import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import { Location } from './locations/Location.js'
import { useLocation } from './locations/LocationDataProvider.js'
import { LocationList } from './locations/LocationList.js'
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()
LocationList()