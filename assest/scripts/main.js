let events = data.events
let containerHome = document.getElementById("container-card-home")
let text = document.getElementById("text-search-js")
let btnSearch = document.getElementById("js-search")
let checkBox = document.getElementById("js-checkbox") 
let alert = document.getElementsByClassName("alert")
// console.log(events); /// me dice undefined Cannot read properties of undefined (reading 'forEach') cuando lo pongo dentro de otra funcion
let btnDark= document.getElementById("dark-mode-js")

//print cards


printCardFiltered(events)


//print checks
crearcheck(filtrarCheckboxes(events))

//buscador

//listeners /// ERROR EN FILTRADO APARECE 2 VECES LA MISMA CARD CUANDO DESCLIKEO Y VUELVO A CLIKEAR LA CATEGORIA
//listener text search
text.addEventListener("keyup", (e) => {
    containerHome.innerHTML = ""
    let filtroCheck= buscarPorCheckBoxes(events)
    let filtroText= buscarPorTexto(text.value, filtroCheck)
    printCardFiltered(filtroText)    
    
})

//listener search btn
btnSearch.addEventListener("click", (e) => {
    e.preventDefault()
    containerHome.innerHTML = ""
    let filtroCheck= buscarPorCheckBoxes(events)
    console.log(filtroCheck);
    let filtroText= buscarPorTexto(text.value, filtroCheck)
    if (filtroText = false){
    printCardFiltered(filtroText)}
    else{
        return  notFound() + printCardFiltered(events)
    }
    // if (filtroText != text.value){
    //     return notFound(alert) 
    // }
})

checkBox.addEventListener("change", (e) => {
   
    let filtroText= buscarPorCheckBoxes(events)
    console.log(filtroText)
    let filtroCheck= buscarPorTexto(text.value,filtroText)
    console.log(filtroCheck)//undefined
    printCardFiltered(filtroCheck)
   
    
})


//FUNCTION


//Cards
function crearCard(array) {
    containerHome.innerHTML += `
        
        <article class=" card rounded-4 p-0 pb-5 " style="width: 18rem;" id="card">
        <img src="${array.image}" alt="${array.name}" class="rounded-top"  />
            <div class="card-body pb-0 mb-0">
        <h5 class="card-title">${array.name}</h5>
        <p class="card-text">${array.date}</p>
        <p class="card-text">${array.description}</p>
        <div class="d-flex flex-row justify-content-between pt-3">
                            <p class="fw-bold">Price $ ${array.price}</p>
                            <a href="#" class="btn">More info</a>
                    </div>
            </div>
    </article>
 
    
    `
}

function printCardFiltered(array) {
    array.forEach(array=> crearCard(array))
    
    // array.forEach(function(array){
    //     let printed= crearCard(array)
    //     return printed
    // })
    // let print=array.forEach( function (array){ crearCard(array)})
    // return print
    
}



//Checkboxes
function filtrarCheckboxes(events) {
    let filtroCategory = new Set(events.map(event => event.category))
    return category = Array.from(filtroCategory)
}


function crearcheck(array) {

    array.forEach(array => {
        checkBox.innerHTML += `
            <div class="form-check form-switch">
             <label class="text-white form-check-label pe-2" for="${array}">${array}</label>
             <input class=" form-check-input bg-danger check-box-js" type="checkbox"  for="${array}" value="${array}" name="${array}">
             </div> 
    `

    })
}

/// filtrado x texto

function buscarPorTexto(texto, array) {
        
        let arrayFiltrado = array.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase())|| evento.price == texto)
        return printCardFiltered(arrayFiltrado)
        
        // if (arrayFiltrado != texto){
        //     notFound()
        //     printCardFiltered(arrayFiltrado)      // }
       
    
}

//not found
function notFound(){
    error= document.getElementById("js-alert")
    error.classList.remove("hide")
    
     
}


function buscarPorCheckBoxes(array) {
    let checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))
    let checkSelected = checkboxes.filter(evento => evento.checked)
    let checkValue = checkSelected.map(evento => evento.value)
    if (checkValue.length > 0) {
        containerHome.innerHTML = ""
        let checkFiltrado=array.filter(evento=>checkValue.includes(evento.category))
        
        return checkFiltrado
    }
    

    return array
}


