// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
$(document).ready(function (){

$('#more-info').on('click',(event)=>{ 
 alert("Here's some info")
event.preventDefault()
})



$('#dog').on('click',(event)=>{ 
  alert("Bow wow!")

  event.stopPropagation()

 })

});
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
