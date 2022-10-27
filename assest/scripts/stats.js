let highest = document.getElementById("highest")

async function upComingAndPast (){
    try{
        let answer = await fetch("https://mind-hub.up.railway.app/amazing?time=upcoming&order=asc")
        let data = await answer.json()
        let upComing= data.events
        let upComingCopy= [...upComing]
        agregarPropiedades(upComingCopy,["estimate"])
        //PastEvents
        let answerPast = await fetch("https://mind-hub.up.railway.app/amazing?time=past&order=desc")
        let eventPast = await answerPast.json()
        let past= eventPast.events
        let pastCopy= [...past]
        agregarPropiedades( pastCopy,["assistance"])   
       
        let assistance=sortBy(pastCopy,["percentage"])
      
        let highCapacity= sortBy(pastCopy,["capacity"])[0]
        
        //Events with the highest percentage of attendance
        let highestAttendance= assistance[0]
       
        //Events with the lowest percentage of attendance
        let lowestAttendance= assistance[assistance.length-1]
 
        //print en tabla1
        dataPrint(highestAttendance, lowestAttendance,highCapacity,highest, ["percentage"] )
     
        /// print tabla pas
        let tablePast=allCategories( pastCopy,"assistance")
        tablePrint(tablePast,"tablePast-js")

        ///print tabla Upcoming
        
        let tableUp=allCategories(upComingCopy,"estimate")
        
        tablePrint(tableUp,"tableUp-js")    
    }
    catch(error){
        console.log(error)
    }
}
upComingAndPast()

//FUNCTIONS

function agregarPropiedades(array,[propiedad]){
    array.map((evento)=>{
        evento.revenue =  Number(evento.price) * Number(evento[propiedad])
        evento.percentage = Number((100 *evento[propiedad] /evento.capacity).toFixed())
    })
}

//ordenar por prodiedades 
function sortBy(array, [propiedad]){
  let ordenado=  [...array].sort((evento1,evento2)=> evento2[propiedad]-evento1[propiedad])
  return ordenado
}

function sumTable(array, propiedad){

let start= {
    category: "",
    revenue: 0,
    capacity: 0,
    [propiedad]: 0,   
}

let sum= array.reduce((elemento1,elemento2)=>{
    return {
       category: elemento2.category,
       revenue: elemento1.revenue + elemento2.revenue,
       capacity: elemento1.capacity + elemento2.capacity,
       [propiedad]: elemento1[propiedad]+ elemento2[propiedad]   
    } 
},start)

sum.percentageTotal= (100 * sum[propiedad] / sum.capacity).toFixed(2)
return sum
}

function allCategories(array,propiedad){
    let  categories = [...new Set(array.map((event)=> event.category))]

    let joinedCategories= categories.map(categorias=>{
        let filtrado= array.filter(array=>array.category== categorias)
        
        return sumTable(filtrado, [propiedad])
        
    })
  
  joinedCategories.sort((evento1,evento2)=> { let ordenado= evento2.revenue-evento1.revenue
    return ordenado})
    return joinedCategories
}

///print 

function tablePrint(array,id){
array.forEach(array=>{
document.querySelector(`#${id}`).innerHTML +=
        
         `
        <td>${array.category}</td>
        <td>$${array.revenue}</td>
        <td>${array.percentageTotal}%</td>
        
        `  
    })

}
//PRINT INFO
function dataPrint(elemento1,elemento2,elemento3, place,propiedad){
    let tr= document.createElement("tr")
    tr.innerHTML +=`
    <td>${elemento1.name} </td>
    <td>${elemento2.name} </td>
    <td>${elemento3.name} </td>
    `
    place.appendChild(tr)
    let tr2= document.createElement("tr")
    tr2.innerHTML +=`
    <td>${elemento1[propiedad]}% </td>
    <td>${elemento2[propiedad]}% </td>
    <td>${elemento3.capacity} </td> 
    `
    place.appendChild(tr2)
}