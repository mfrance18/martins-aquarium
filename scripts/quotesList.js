import { getQuotes } from "./quotesData.js";
import { Quotes } from "./quotes.js";
export const QuoteList = () => {

    // Get a reference to the `<section class="fishList">` element
    const quoteElement = document.querySelector(".quote")
    const allQuotes = getQuotes()
  
    let quoteHTMLRepresentation = ""
    
    for (const type of allQuotes) {
        quoteHTMLRepresentation += Quotes(type)
    }
    // Add to the existing HTML in the content element
    quoteElement.innerHTML += quoteHTMLRepresentation
}