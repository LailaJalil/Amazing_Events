let containerStats= document.getElementById("containerStats")

async function stats(){
    try{
        let info = await fetch("https://mind-hub.up.railway.app/amazing")
        let data = await info.json()
        let events= data.events
        let eventsCopy= [...events]
        assistance=sortBy(eventsCopy,["assistance"])
        //Event with larger capacity
        let highCapacity= sortBy(eventsCopy,["assistance"])[0].name
        //Events with the highest percentage of attendance
        highestAttendance= assistance[0].name
        //Events with the lowest percentage of attendance
        lowestAttendance= assistance[assistance.length-1].name
        //print en tabla
        dataPrint(highestAttendance, highestA)
        dataPrint(lowestAttendance, lowestA)
        dataPrint(highCapacity,highestCapacity)  
        
    }
    catch (error){
        console.log(error)
    }
}
stats()
async function upComingAndPast (){
    try{
        let answer = await fetch("https://mind-hub.up.railway.app/amazing?time=upcoming&order=asc")
        let data = await answer.json()
        let upComing= data.events
        let upComingCopy= [...upComing]
        agregarPropiedades(upComingCopy,["estimate"])
        //categorias ordenadas x mayor ganancia Up

        let infoCategory = await fetch("https://mind-hub.up.railway.app/amazing?category")
        let datos = await infoCategory.json()
        let eventCategory = datos.events
        //categorías ordenadas x mayor ganancia
        sortBy(upComingCopy, ["revenue"])
        let categoryUp = [...new Set(upComingCopy.map((event)=> event.category))]
        categoryPrint(categoryUp,upComingCategory)
    //Revenues

//Percentage of attendance
        //PastEvents
        let answerPast = await fetch("https://mind-hub.up.railway.app/amazing?time=past&order=desc")
        let eventPast = await answerPast.json()
        let past= eventPast.events
        let pastCopy= [...past]
        agregarPropiedades( pastCopy,["assistance"])   
        
        //categorias ordenadas x mayor ganancia Past
        sortBy(pastCopy, ["revenue"])
        let categoryPast = [...new Set(pastCopy.map((event)=> event.category))]
        categoryPrint(categoryPast,pastCategory)
        /// por categorias
        
        
     
    }
    catch(error){
        console.log(error)
    }
}
upComingAndPast()


//EVENTS STATISTICS







    
//UPCOMING EVENTS STATISTICS BY CATEGORY

//Revenues

//Percentage of attendance

//PAST EVENTS STATISTICS BY CATEGORy


//FUNCTIONS

//Revenues
function categoryRevenues(array,keyword,){
    let revenues = [...array].filter(evento => evento.category.toLowerCase().includes(keyword.toLowerCase()))
    revenues.sort((evento2,evento1)=> evento2.ganancia-evento1.ganancia)
  
    return revenues
}
function agregarPropiedades(array,[propiedad]){
    array.map((evento)=>{
        evento.revenue =  Number(evento.price) * Number(evento[propiedad])
        evento.percentage = Number((100 *evento[propiedad] /evento.capacity).toFixed())
    })
}
//ordenar por prodiedades
function sortBy(array, [propiedad]){
  let ordenado=  array.sort((evento1,evento2)=> evento2[propiedad]-evento1[propiedad])
  return ordenado

}

// function sumarGanancias(array, [propiedad]){
//     array.reduce((funcion, estadoInicial)=>{
//         [propiedad]
//     })

    
// }

//Percentage

//highest percentage of attendance Past



///print categories

let tableNodelist= document.querySelectorAll(".category")
let tableCategory= [...tableNodelist]
let upComingCategory= tableCategory[0]
let pastCategory= tableCategory[1]
let highestA = document.getElementById("highestAttendance")
let lowestA = document.getElementById("lowestAttendance")
let highestCapacity = document.getElementById("largerCapacity")
console.log(highestA)
function categoryPrint(array,place){
    array.forEach((array) => {
    let tr= document.createElement("tr")
    tr.className ="category td"
    tr.innerHTML +=`${array}`
    place.appendChild(tr)
    
})
}
//PRINT INFO
function dataPrint(elemento, place){

    let tr= document.createElement("tr")
    tr.innerHTML +=`${elemento}`
    place.appendChild(tr)
    

}