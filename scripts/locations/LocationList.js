 import { useLocation } from "./LocationDataProvider.js"
 import { Location } from "./Location.js"
 
 export const LocationList = () => {
 
     const contentElement = document.querySelector("#LocationList")
     const locations = useLocation()
 
     let locationHTMLRepresentations = ""
     for (const singleLocationObject of locations) {
             locationHTMLRepresentations += Location(singleLocationObject)
     }
 
     contentElement.innerHTML += `
         <article class="locationList">
             ${locationHTMLRepresentations}
         </article>
     `
 }
 