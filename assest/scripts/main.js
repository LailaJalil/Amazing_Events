let containerHome = document.getElementById("container-card-home")
let text = document.getElementById("text-search-js")
let btnSearch = document.getElementById("js-search")
let checkBox = document.getElementById("js-checkbox") 
let options= document.getElementById("options-js")

async function events(){
    try {
        let answer = await fetch("https://mind-hub.up.railway.app/amazing")
        let data = await answer.json()
        let events= data.events
        cardCreator(events)
        crearcheck(filtrarCheckboxes(events))
        lowPrice (events)
        highPrice(events)
        select.addEventListener("change",e=>{
            containerHome.innerHTML = ""
        
          switch (e.target.value) {
            case "low":
                cardCreator(lowPrice(events))
                break
            case "high":
                cardCreator(highPrice(events))
                break
            case "all":
                   cardCreator(events) 
          }  
        })
        btnSearch.addEventListener("click", (e) => {
            e.preventDefault()
            let filtroCheck= buscarPorCheckBoxes(events)
             console.log(filtroCheck)
            let filtroText= buscarPorTexto(text.value, filtroCheck)
            filtroText.filter(filtro=> filtro.length !==0)
            containerHome.innerHTML=""
        
            cardCreator(filtroText)
            
        })
        
        checkBox.addEventListener("change", (e) => {
            let filtroCheck=buscarPorCheckBoxes(events)
            console.log(filtroCheck);
            let filtroText= buscarPorTexto(text.value, filtroCheck)
            console.log(filtroText)
            filtroText.filter(filtro=> filtro.length !==0)
                containerHome.innerHTML=""
           
            cardCreator(filtroText)
            
        })           
        text.addEventListener("keyup", (e) => {
            let filtroCheck= buscarPorCheckBoxes(events)
            let filtroText= buscarPorTexto(text.value, filtroCheck)
            if(filtroText.length !==0){
                containerHome.innerHTML=""
                cardCreator(filtroText)
            } else {
        
            notFound()
            }
            
        })
    }

    catch (error){
        console.log(error)
    }
}

events()


//FUNCTION


//Cards

function cardCreator (array){
    array.forEach(card=>{
    containerHome.innerHTML += `
        
    <article class=" card rounded-4 p-0 pb-5 " style="width: 18rem;" id="card">
    
    <img src="${card.image}" alt="${card.name}" class="rounded-top"  />
        <div class="card-body pb-0 mb-0">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.date}</p>
    <p class="card-text">${card.description}</p>
    <div class="d-flex flex-row justify-content-between pt-3">
                        <p class="fw-bold">Price $ ${card.price}</p>
                         <a href="assest/pages/details.html?id=${card.id}" class="btn" id="${card.id}">More info</a>
                </div>
        </div>
</article>


`})
}
      

//Checkboxes


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

function filtrarCheckboxes(events) {
    let filtroCategory = new Set(events.map(event => event.category))
    return category = Array.from(filtroCategory)
}
/// filtrado x texto

function buscarPorTexto(texto, array) {
        
        let arrayFiltrado = array.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase())|| evento.price == texto)
        
        
        return arrayFiltrado
        
       
    
}

//not found
function notFound(){
 
     containerHome.innerHTML = `
     <div class="card text-dark notfound">
     <p class="card-text"><small>Your word <span class="fw-bold">"${text.value}"</span> didn´t bring a match.</small></p> 
    
   </div>
     `
      
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



function dropdownPrint(){
    let options= document.getElementById("options-js")
    let selection= document.createElement("select")
    selection.className="form-select-sm bg-dark bg-success text-white"
    
     selection.innerHTML=
     `
        <option value="all" >Sort by:</option>
        <option value="high" >Price: High to Low</option>
        <option value="low" >Price: Low to High</option>
        

    `
    options.appendChild(selection)
    
}

dropdownPrint()

function lowPrice (array){
    
    let  lower= [...array].sort((evento1,evento2)=> evento1.price-evento2.price)
  
    return lower
}



function highPrice (array){
    let higher= [...array].sort((evento1,evento2)=> evento2.price-evento1.price)
 
    return higher
}

let select = document.querySelector("select")








    