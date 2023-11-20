// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$(document).ready(function (){
        // create a new "a" element
let a = $('<a id="cta">Buy Now!</a>')
        // set text on a element to "buy Now" 
        // assign id = cta to A 
        // place after last P 
       $('main').append(a)
        // read data-color of img tag 
        // log to console 
   console.log($('main>img').attr('data-color'))
        // select third li item (turbocharged) 
        // set class name to highlight 
        $('ul').children()[2].className = "highlight"
       
        // remove last paragraph 
        $('main>p').remove()
        // create listener on Buy now link 
            //  when buy now clicked , link should be removed /
            // replaced text that says "added to cart" 
            
$('#cta').on('click',()=>{ 
 $('main>a').remove()
 
       let a = $('<a id="cta">Added to cart</a>')
       $('main').append(a)
})




         
});