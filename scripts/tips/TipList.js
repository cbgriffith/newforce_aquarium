import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector("#TipList")
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const singleTipObject of tips) {
            tipHTMLRepresentations += Tip(singleTipObject)
    }

    contentElement.innerHTML += `
        <article class="tipList">
            ${tipHTMLRepresentations}
        </article>
    `
}