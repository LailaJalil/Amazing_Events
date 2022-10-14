//impresión y filtro de cards
let events = data.events
let containerHome= document.getElementById("container-card-home")
let text= document.getElementById("text-search-js")
let btnSearch= document.getElementById("js-search")
let checkbox= document.getElementById("js-checkbox")

printCardFiltered(events, containerHome)


// checkbox

let categoryFiltrada = Array.from(new Set(events.map(event=> event.category)))
check(categoryFiltrada)

checkbox.addEventListener("change", (e)=>{
   filtrarCheckbox(categoryFiltrada)
})

function filtrarCheckbox (array){
    let checkBox= array.filter(check=>check.checked)
    console.log(checkbox)
    let category= checkBox.map(filtro=>filtro.value)
    console.log(category.value);

}



//print category

function check (array){
    array.forEach(function(array){
            checkbox.innerHTML +=`
            <div class="form-check form-switch">
             <label class="text-white form-check-label pe-2" for="${array}">${array}</label>
             <input class=" form-check-input bg-danger check-box-js " type="checkbox"  for="${array}" value="${array}" name="${array}">
             </div> 
    `
})}


//buscador

// console.log(events);
text.addEventListener("keyup", (e)=>{
    containerHome.innerHTML =""
    buscarPorTexto(text.value, events)

})
btnSearch.addEventListener("click", (e)=>{
  e.preventDefault()
  containerHome.innerHTML =""
  buscarPorTexto(text.value, events)
  if (!buscarPorTexto(text.value, events)){
    window.alert("Oops!Please try again with another search  and/or search for a specific keyword to get a faster and more accurate result ")
}
  
})  
//  console.log(events.category); /// me da undefined por eso no filtra

//FUNCTION

    function buscarPorTexto(texto,array){
        let arrayFiltrado= array.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()))
        printCardFiltered(arrayFiltrado, containerHome)
        

    }

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

function printCardFiltered(events, elemento){
    events.forEach(function(events){
     crearCard(events,elemento)
    })
 }