let containerStats= document.getElementById("containerStats")
let tableNodelist= document.querySelectorAll(".category")
let tableCategory= [...tableNodelist]
let upComingCategory= tableCategory[0]
let pastCategory= tableCategory[1]
let highestA = document.getElementById("highestAttendance")
let lowestA = document.getElementById("lowestAttendance")
let highestCapacity = document.getElementById("largerCapacity")
let table2= document.getElementById("table2-js")
let table3= document.getElementById("table3-js")

async function stats(){
    try{
        let info = await fetch("https://mind-hub.up.railway.app/amazing")
        let data = await info.json()
        let events= data.events
        let eventsCopy= [...events]
        agregarPropiedades(eventsCopy,["assistance"])
        
        //Event with larger capacity
        
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
        console.log(eventCategory)
        //categorías ordenadas x mayor ganancia
        // sortBy(upComingCopy, ["revenue"])
        // let categoryUp = [...new Set(upComingCopy.map((event)=> event.category))]
        
    //Revenues
            
//Percentage of attendance
        //PastEvents
        let answerPast = await fetch("https://mind-hub.up.railway.app/amazing?time=past&order=desc")
        let eventPast = await answerPast.json()
        let past= eventPast.events
        let pastCopy= [...past]
        agregarPropiedades( pastCopy,["assistance"])   
        let assistance=sortBy(pastCopy,["assistance"])
        let highCapacity= sortBy(pastCopy,["assistance"])[0]
        //Events with the highest percentage of attendance
        let highestAttendance= assistance[0]
       
        //Events with the lowest percentage of attendance
        let lowestAttendance= assistance[assistance.length-1]
     
        //print en tabla1
        dataPrint(highestAttendance, highestA, ["percentage"], "%" )
        dataPrint(lowestAttendance, lowestA,["percentage"], "%")
        dataPrint(highCapacity,highestCapacity, ["capacity"])  
        categoryRevenues(pastCopy,"cinema")
      
        //categorias ordenadas x mayor ganancia Past
        // sortBy(pastCopy, ["revenue"])
        let categoryPast = [...new Set(pastCopy.map((event)=> event.category))]
     
        /// por categorias
        allCategories(categoryPast, pastCopy)
        console.log(allCategories(categoryPast, pastCopy));
        sumTable(categoryPast, pastCopy, "assistance")
        // ME QUEDA VER COMO PASO ESE ARRAR DE ARRAY DE OBJETOS POR EL SUMTABLE
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

//PAST EVENTS STATISTICS BY CATEGORY


//FUNCTIONS

//Revenues
function categoryRevenues(array,keyword){
    
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

function sumTable(array, categorias, propiedad){
 allCategories(categorias, array)
let start= {
    category: "",
    revenue: 0,
    capacity: 0,
    [propiedad]: 0,
    
}
let sum= array.reduce((elemento1,elemento2)=>{
    return {
       category: elemento1.category,
       revenue: elemento1.revenue + elemento2.revenue,
       capacity: elemento1.capacity + elemento2.capacity,
       [propiedad]: elemento1[propiedad]+ elemento2[propiedad]   
    } 
},start)

sum.percentageTotal= (100 * sum[propiedad] / sum.capacity).toFixed(2)

return sum

}
function allCategories(categorias, array){
  let joinedCategories= categorias.map(categorias=>{
    let filtrado= array.filter(array=>array.category== categorias)
    return filtrado
  })
 return joinedCategories
}
// let stats = categories.map(cat => {
//     let filter = events.filter(event => event.category===cat)
//     return reduceStats(filter,property)
// })
// printTable2(stats,id)
// }
//Percentage

//highest percentage of attendance Past



///print categories



function tablePrint(array,id){
document.querySelector(`#${id}`).innerHTML =
        
         `
        <td>${array.category}</td>
        <td>${array.revenue}</td>
        <td>${array.assistance}</td>
        `
    
    

    // array.forEach((array) => {
    // let tr= document.createElement("tr")
    // tr.className ="category td"
    // tr.innerHTML +=`${array}`
    // place.appendChild(tr)
    

}
//PRINT INFO
function dataPrint(elemento, place,propiedad, valor){

    let tr= document.createElement("tr")
    tr.innerHTML +=`${elemento.name}`
    place.appendChild(tr)
    let tr2= document.createElement("tr")
    tr2.innerHTML +=`${elemento[propiedad] + [valor]} `
    tr.appendChild(tr2)

}