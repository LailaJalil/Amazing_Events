let containerStats= document.getElementById("containerStats")

async function stats(){
    try{
        let info = await fetch("https://mind-hub.up.railway.app/amazing")
        let data = await info.json()
        let events= data.events
        console.log(events)
        let infoCategory = await fetch("https://mind-hub.up.railway.app/amazing?category")
        let datos = await infoCategory.json()
        console.log(datos)
        let eventCategory = datos.events
        let category = [...new Set(eventCategory.map((event)=> event.category))]
       
    }
    catch (error){
        console.log(error)
    }
}
stats()
async function upComing (){
    try{
        let answer = await fetch("https://mind-hub.up.railway.app/amazing?time=upcoming&order=asc")
        let data = await answer.json()
        let upComing= data.events
        console.log(upComing)
       

    }
    catch(error){
        console.log(error)
    }
}
upComing()
async function past (){
    try{
        let answer = await fetch("https://mind-hub.up.railway.app/amazing?time=past&order=desc")
        let eventPast = await answer.json()
        let past= eventPast.events
        console.log(past) 
       
        
    }
    catch(error){
        console.log(error)
    }
}
past()

//EVENTS STATISTICS

//Events with the highest percentage of attendance


//Events with the lowest percentage of attendance

//Event with larger capacity
    
//UPCOMING EVENTS STATISTICS BY CATEGORY
//Categories

//Revenues

//Percentage of attendance

//PAST EVENTS STATISTICS BY CATEGORY
//highest percentage of attendance          lowest percentage of attendance      event with larger capacity
//Categories


//Revenues


//Percentage

//highest percentage of attendance Past

