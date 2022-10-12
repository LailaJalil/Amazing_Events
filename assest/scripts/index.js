//impresión y filtro de cards
let events = data.events
let container2= document.getElementById("container-card-2")

let cardEvent= events.map(function(events){
    return crearCard(events,container2)
})
// checkbox
let checkboxEvent= document.getElementById("js-checkbox")
let categoryFiltrada = new Set(events.map(function(event){
  return event.category
}))

let categoryArray= Array.from(categoryFiltrada)
console.log(categoryArray);

categoryArray.forEach(function(categoryArray){
   checkboxEvent.innerHTML +=`
    <label class="text-white form-check-label pe-3 ">${categoryArray}
    <input class=" form-check-input bg-danger" type="checkbox" role="switch" name="${categoryArray}">
    `
})


//buscador
let searchInput = document.getElementById("js-search")



//FUNCTION


function crearCard(evento, elemento){
    elemento.innerHTML += `
    
    <article class=" card rounded-4 p-0 pb-5 " style="width: 18rem;" id="card">
    <img src="${evento.image}" alt="${evento.name}" class="rounded-top"  />
        <div class="card-body pb-0 mb-0">
    <h5 class="card-title">${evento.name}</h5>
    <p class="card-text">${evento.date}</p>
    <p class="card-text">${evento.description}</p>
    <div class="d-flex flex-row justify-content-between pt-3">
                        <p class="fw-bold">Price $ ${evento.price}</p>
                        <a href="#" class="btn">More info</a>
                   </div>
        </div>
 </article>
 
    
    `
}


