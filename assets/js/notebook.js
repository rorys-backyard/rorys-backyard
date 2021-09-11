// First step is to get animals data
// Select notebook element
// Loop throught animals array
// Next to create multiple elements, add attributes/text/etc. and append into each other
// Append final pieces to notebook element

$.getJSON('./assets/data/animals.json', (animals) => {
    const notebook = document.querySelector('#notebook');

    animals.forEach(animal => {
        // This is the created element
        // <div></div>
        const notebookPaperEl = document.createElement('div');

        // addAttribute('attribute', 'value');
        // Think about true/false, left/right
        notebookPaperEl.addAttribute('class', 'notebook-paper')

        const polaroidContainerEl = document.createElement('div');
        polaroidContainerEl.addAttribute('class', 'polaroid-container')

        // End Result
        // <div className="notebook-paper-left">
        //     <div className="polaroid-container-right">
        //
        //     </div>
        // </div>
        notebookPaperEl.appendChild(polaroidContainerEl)
    
        polaroidContainerEl.appendChild(imgEl)
    })
});
