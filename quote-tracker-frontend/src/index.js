const BACKEND_URL = 'http://localhost:3000/quotes';
fetch(`${BACKEND_URL}`)
  .then(response => response.json())
  .then(parsedResponse => parsedResponse.forEach( quote => renderQuote(quote) ));

  function renderQuote(quote) {
    let renderData = `<li>${quote.body} </li>`
    let quoteContainer = document.getElementById("quotes-container")
    quoteContainer.innerHTML += renderData 
  }


  