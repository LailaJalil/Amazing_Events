let events = data.events
let containerHome = document.getElementById("container-card-home")
let text = document.getElementById("text-search-js")
let btnSearch = document.getElementById("js-search")
let checkBox = document.getElementById("js-checkbox") 


//print cards


printCardFiltered(events)


//print checks
crearcheck(filtrarCheckboxes(events))

//buscador

//listeners
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
    let filtroText= buscarPorTexto(text.value, filtroCheck)
    printCardFiltered(filtroText) 
 
})

checkBox.addEventListener("change", (e) => {
   
    let filtroText= buscarPorCheckBoxes(events)
    let filtroCheck= buscarPorTexto(text.value,filtroText)
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
    array.forEach(function (array) {
        crearCard(array)
    })
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
    
        let arrayFiltrado = array.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()))
        return printCardFiltered(arrayFiltrado)
    
}

//not found
function notFound(){
    containerHome.innerHTML= `
    <div class="alert alert-secondary" role="alert">
     Oops! Please change your search criteria
     </div>
     `
     appendto(btnSearch)
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


