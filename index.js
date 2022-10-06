
 let events = data.events
 console.log(events);
let container= document.getElementById("cardcontainer")
let container2= document.getElementById("container-card-2")


for (let events of data.events){
    crearCard(events, container2)
}




//FUNCTION
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



// for(let i=0; i<events.length; i++){
    
//     let div=document.getElementById("container-card-2")
    
//      div.innerHTML +=
// `
// <div id="card" class="card rounded-4 p-0 pb-5" style="width: 15rem;" >
// <img src="${events[i].image}" alt="${events[i].name}" class="rounded-top"  />
// <div class="card-body">
// <h2 class="card-title">${events[i].name}</h2>
// <p class="card-text"> ${events[i].date}</p>
// <p class="card-text"> ${events[i].description}</p>
// <table class="table-light">
// <tr >
// <th class="pe-2"> Category:</th>
// <td class="card-text  ps-2">  ${events[i].category}</td>
// </tr>
// <tr>
// <th class="pe-2"> Place:</th>
// <td class="card-text ps-2"> ${events[i].place}</td>
// </tr>
// <tr>
// <th class="pe-2"> Capacity:</th>
// <td class="card-text ps-2"> ${events[i].capacity}</td>
// </tr>
// <tr>
// <th class="pe-2"> Assistance:</th>
// <td class="card-text  ps-2"> ${events[i].assistance}</td>
// </tr>
// <tr>
// <th class="pe-2"> Price:</th>
// <td class="card-text  ps-2"> $ ${events[i].price}</td>
// </tr>



// `

// }
