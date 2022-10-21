let containerStats= document.getElementById("containerStats")

async function stats(){
    try{
        let info = await fetch("https://mind-hub.up.railway.app/amazing")
        let data = await info.json()
        let events= data.events
      
   

    }
    catch (error){
        console.log(error)
    }
}
stats()



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


