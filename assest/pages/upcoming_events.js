console.log(data)
let events = data.events
let container= document.getElementById("cardcontainer")
let container2= document.getElementById("container-card-2")





for(let i=0; i<events.length; i++){
       
         if(data.currentDate < events[i].date){

    let div=document.getElementById("container-card-2")
    
     div.innerHTML +=
`
<div id="card" class="card rounded-4 p-0 pb-1" style="width: 18rem;" >
<img src="${events[i].image}" alt="${events[i].name}" class="rounded-top"  />
<div class="card-body">
<h2 class="card-title">${events[i].name}</h2>
<div class="card-body"> 
<p class="card-text"> ${events[i].date}</p>
<p class="card-text "> ${events[i].description}</p>
<p class="card-tex fw-bold ">Price ${events[i].price}</p>
<a href="#" class="btn border ">More info</a>
</div>



`

}

}
container.appendChild("cardcontainer")