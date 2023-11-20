/**
 * Toggles "done" class on <li> element
 */

/**
 * Delete element when delete link clicked
 */

/**
 * Adds new list item to <ul>
 */


$(document).ready(function (){

  //if li element clicked 
  //  toggle class done (done) 
    //if delete a clicked remove the li
    //if select all thwe class delete

    //if add linked is clicked add item as new list item to the list


   
function addEventItems(){
  let deleters = $('.delete')
  for(deleteThing of deleters){
    
  $(deleteThing).on('click',(event)=>{
    //console.log($(event.target), 'deletething')
    //console.log('deleeting')
    $(event.target).parent().remove()

  })
}

let li = $('main>ul').children()
//console.log(li)
li.on('click',(event)=>{
 if(event.target.className==='done'){
  event.target.className=''
 }
 else{
  event.target.className='done'
 }
   //console.log(event.target, event.target.className)
})

}

  
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
};

// add listener for add
addEventItems()
$("main>div>.add-item").on('click',()=>{ 
      let ul = $('main>ul') 
      const text = $('input').val();
      ul.append(`<li>
      <span>${text}</span>
      <a class="delete">Delete</a>
    </li>`)
    $('input').val('item')
    addEventItems() 
})
})